// ДЗ 18.1. Таймер відліку

// Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

class Timer {
  constructor(time) {
    this.time = time
    this.initialTime = time
    this.timer = document.querySelector('.timer')
    this.btnStart = document.querySelector('.btn-start')
    this.btnStop = document.querySelector('.btn-stop')
    this.btnReset = document.querySelector('.btn-reset')
    this.interval = null
    
    this.btnStart.addEventListener('click', () => this.start())
    this.btnStop.addEventListener('click', () => this.stop())
    this.btnReset.addEventListener('click', () => this.reset())

    this.addTimer()
  }

  addTimer() {
    let minutes = Math.floor(this.time / 60)
    let seconds = this.time % 60

    if(minutes < 10) {
      minutes = '0' + minutes
    }

    if(seconds < 10) {
      seconds = '0' + seconds
    }

    this.timer.textContent = `${minutes}:${seconds}`

    if(this.time > 0) {
      this.time--
    }

    return this.timer.textContent
  }

  start() {
    if(this.interval) {
      return
    } 

    this.timer.classList.remove('timer-stop')

    this.interval = setInterval(() => {
    this.addTimer()
    }, 1000)
  }

  stop() {

    if(this.interval) {
      this.timer.classList.add('timer-stop')
      clearInterval(this.interval)
      this.interval = null
    }
  }

  reset() {
    this.timer.classList.remove('timer-stop')

    clearInterval(this.interval)
    this.interval = null
    this.time = this.initialTime
    this.addTimer()
  }
}

const timer = new Timer(85)