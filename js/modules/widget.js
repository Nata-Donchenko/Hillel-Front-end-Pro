import dayjs from "dayjs" 
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

import {container, searchBtn, searchInput} from './dom.js'
import {createHtmlElement, setZeroIfMissing, updateIcon} from './utils.js'

const apiKey = 'bf2cd1d10ef51e9fc0c1f52ac7447153'

export async function showWether(searchCity) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCity}&appid=${apiKey}`
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    const secondsInMinute = 60
    const offsetMinutes = data.timezone / secondsInMinute
    const today = dayjs().utcOffset(offsetMinutes)
    const celsiusUniCode = '\u2103'
    const degreeUniCode = '\u00B0'
    const measurementHumidity = '%'
    const measurementSpeed = 'm/s'
    const sunrise = dayjs.unix(data.sys.sunrise).utcOffset(offsetMinutes)
    const sunset = dayjs.unix(data.sys.sunset).utcOffset(offsetMinutes)

    const infoText = container.querySelector('.info-text')
    if(infoText) {
      infoText.remove()
    }

    const oldWidget = container.querySelector('.weather_widget')
    if(oldWidget) {
      oldWidget.remove()
    }

    const weatherWidget = createHtmlElement('div', 'weather_widget')
    container.appendChild(weatherWidget)

    const refreshUniCode = '\u27F3'
    const refreshBtn = createHtmlElement('button', 'refresh_btn', refreshUniCode)

    const todayInformation = createHtmlElement('div', 'today_information')
    const city = createHtmlElement('p', 'city')
    city.textContent = data.name + ', ' + data.sys.country

    const time = createHtmlElement('p', 'time')
    time.textContent = today.format('HH:mm')
      
    const dayOfWeek = createHtmlElement('p', 'day_of_week')
    dayOfWeek.textContent = today.format('ddd DD.MM.YYYY')

    const dayCycle = createHtmlElement('div', 'dayCycle')

    const sunriseText = createHtmlElement('p', 'dayCycle_text')
    sunriseText.textContent = 'sunrise ' + sunrise.format('HH:mm')

    const sunsetText = createHtmlElement('p', 'dayCycle_text')
    sunsetText.textContent = 'sunset ' + sunset.format('HH:mm')

    dayCycle.append(sunriseText, sunsetText)

    todayInformation.append(city, time, dayOfWeek, dayCycle)


    const weatherInformation = createHtmlElement('div', 'weather_information')
    const weatherLeftBlock = createHtmlElement('div', 'weather_left-block')

    const degreesText = createHtmlElement('p', 'text')
    degreesText.textContent = 'temperature:'

    const degrees = createHtmlElement('p', 'meaning')
    degrees.textContent = data.main.temp.toFixed(1) + celsiusUniCode

    const fillsLikeDegreesText = createHtmlElement('p', 'text')
    fillsLikeDegreesText.textContent = 'fills like:'

    const fillsLikeDegrees = createHtmlElement('p', 'meaning')
    fillsLikeDegrees.textContent = data.main.feels_like.toFixed(1) + celsiusUniCode

    const humidityText = createHtmlElement('p', 'text')
    humidityText.textContent = 'humidity'

    const humidity = createHtmlElement('p', 'meaning')
    humidity.textContent = data.main.humidity + measurementHumidity

    weatherLeftBlock.append(degreesText, degrees, fillsLikeDegreesText, fillsLikeDegrees, humidityText, humidity)

   
    const weatherCentralBlock = createHtmlElement('div', 'weather_central-block')

    const img = createHtmlElement('img', 'icon')
    const text = createHtmlElement('p', 'icons_text')

    weatherCentralBlock.append(img, text)

    const weatherIcons = data.weather.map(item => ({
      icon: `https://openweathermap.org/img/wn/${item.icon}@2x.png`,
       description: item.description
    }))

    updateIcon(weatherCentralBlock, weatherIcons, 3000)
    

    const weatherRightBlock = createHtmlElement('div', 'weather_right-block')

    const windSpeedText = createHtmlElement('p', 'text')
    windSpeedText.textContent = 'wind spped:'

    const windSpeed = createHtmlElement('p', 'meaning')
    windSpeed.textContent = data.wind.speed + measurementSpeed

    const windDegText = createHtmlElement('p', 'text')
    windDegText.textContent = 'wind direction:'

    const windDeg = createHtmlElement('p', 'meaning')
    windDeg.textContent = data.wind.deg + degreeUniCode

    const windGustText = createHtmlElement('p', 'text')
    windGustText.textContent = 'wind gust:'

    const windGust = createHtmlElement('p', 'meaning')
    windGust.textContent = data.wind.gust +  measurementSpeed

    weatherRightBlock.append(windSpeedText, windSpeed, windGustText, windGust, windDegText, windDeg)

    weatherInformation.append(weatherLeftBlock, weatherCentralBlock, weatherRightBlock)

    weatherWidget.append(refreshBtn, todayInformation, weatherInformation)
  

    if (today.isBefore(sunrise) || today.isAfter(sunset)) {
      container.classList.add('container-dark')
      refreshBtn.classList.add('refresh_btn-dark')
      searchBtn.classList.add('search_btn-dark')
      searchInput.classList.add('search_input-dark')
    } else {
      container.classList.remove('container-dark')
      refreshBtn.classList.remove('refresh_btn-dark')
      searchBtn.classList.remove('search_btn-dark')
      searchInput.classList.remove('search_input-dark')
    }

    setZeroIfMissing([
      {value: data.main.temp, element: degrees, suffix: celsiusUniCode},
      {value: data.main.feels_like, element: fillsLikeDegrees, suffix: celsiusUniCode},
      {value: data.main.humidity, element: humidity, suffix: measurementHumidity},
      {value: data.wind.speed, element: windSpeed, suffix: measurementSpeed},
      {value: data.wind.gust, element: windGust, suffix: measurementSpeed},
      {value: data.wind.deg, element: windDeg, suffix: degreeUniCode},
    ])
      
    refreshBtn.addEventListener('click', () => {
      showWether(searchCity)
    })

  } catch(error) {
    console.error('There has been a problem with your fetch operation', error)
  }
}