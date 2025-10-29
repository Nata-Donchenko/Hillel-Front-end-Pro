// homeTask 4.3.

let dateOfBirt = prompt("In which year were you born?", "e.g., 1991")
let age

if (dateOfBirt === null || dateOfBirt == " ") {
  age = "It's a shame you didn't want to enter yours year of birth."
} else {
    dateOfBirt = +dateOfBirt
    age = `Hello my ${2025 - dateOfBirt}-years friend!`
}

let city = prompt("In which city are you living?", "Kyiv, Washington, London or else")
let cityMassage

if (city === null || city == " ") {
  cityMassage = "It's a shame you didn't want to enter yours city."
} else {
    switch (city) {
      case "Kyiv":
        cityMassage = "You are living in the capital of Ukraine!"
        break
      case "Washington":
        cityMassage = "You are living in the capital of USA!"
        break
      case "London":
        cityMassage = "You are living in the capital of Great Britain!"
        break
      default:
        cityMassage = `You are living in city ${city}.`
        break
    }       
}

let sport = prompt("What is your favorite sport?", "Football, Basketball, Box or else")
let sportMassage
if (sport === null || sport == " ") {
  sportMassage = "It's a shame you didn't want to enter yours favorite sport."
} else {
    switch (sport) {
      case "Football":
        sportMassage = "Do you want to become like Diego Maradona?"
        break
      case "Basketball":
        sportMassage = "Do you want to become like Shaquille O'Neal?"
        break
      case "Box":
        sportMassage = "Do you want to become like Muhammad Ali?"
        break
      default:
        sportMassage = `Your favorite sport is ${sport}.`  
        break  
    }
}

alert (`${age} ${cityMassage} ${sportMassage}`)