// 16.1 Вам потрібно зробити конструктор сутності "Студент". 
// Студент має ім'я, прізвище, рік народження — це властивості. 
// Є масив з оцінками, це також властивість. 
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
// спочатку він не заповнений, але на 25 елементів. 
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо 
// метод .present() на чергове порожнє місце, в масив записується true, 
// коли викликаємо .absent() - записується false. 
// Передбачте будь-який захист від того, щоб у масиві відвідуваності 
// не могло бути більше 25 записів. 
// Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку 
// і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, 
// о метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , 
// то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри 
// (конкретних студентів) і показати використання цих методів.

function Student (name, surname, birthYear, grades) {
  this.name = name
  this.surname = surname
  this.birthYear = birthYear
  this.grades = grades
  this.attendance = new Array(25).fill(null) 
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear()
  return currentYear - this.birthYear
}

Student.prototype.getAverageGrade = function () {
  if(this.grades.length === 0) {
    return 0
  }

  const sum = this.grades.reduce((acc, grade) => acc + grade, 0)
  return sum / this.grades.length
}

Student.prototype._getAttendanceIndex = function () {
  return this.attendance.indexOf(null)
}

Student.prototype.present = function () {
  const index = this._getAttendanceIndex()
  if(index === -1) {
    return
  }

  this.attendance[index] = true
}

Student.prototype.absent = function () {
  const index = this._getAttendanceIndex()
  if(index === -1) {
    return
  }

  this.attendance[index] = false
}

Student.prototype.summary = function () {
  const averageGrade = this.getAverageGrade()

  const visited = this.attendance.filter((visit) => visit === true).length
  const total = this.attendance.filter((visit) => visit !== null).length
  let totalAttendance = 0

  if(total !== 0) {
    totalAttendance = visited / total
  }

  if(averageGrade > 90 && totalAttendance > 0.9) {
    return 'Молодець!'
  } else if (averageGrade > 90 || totalAttendance > 0.9) {
    return 'Добре, але можна краще'
  } else {
    return 'Редиска!'
  }
}

const firstStudent = new Student('Jack', 'Adams', 1991, [96, 90, 99])
const secondStudent = new Student('Ann', 'Philips', 1995, [85, 64, 70])
const thirdStudent = new Student('Alex', 'Black', 1993, [24, 12, 45])

function changeNull (arr) {
  arr.forEach((el, index, arr) => {
    if(el === null) {
      arr[index] = false
    }
  })
}

for (let i = 0; i < 24; i++) {
  firstStudent.present()
}

changeNull(firstStudent.attendance)
console.log(firstStudent)
console.log(`
  name: ${firstStudent.name}
  surname: ${firstStudent.surname}
  age: ${firstStudent.getAge()}
  average rating: ${firstStudent.getAverageGrade()}
  grade: ${firstStudent.summary()}
`)


for (let i = 0; i < 23; i++) {
  secondStudent.present()
}

changeNull(secondStudent.attendance)
console.log(secondStudent)
console.log(`
  name: ${secondStudent.name}
  surname: ${secondStudent.surname}
  age: ${secondStudent.getAge()}
  average rating: ${secondStudent.getAverageGrade()}
  grade: ${secondStudent.summary()}
`)

for (let i = 0; i < 10; i++) {
  thirdStudent.present()
}

changeNull(thirdStudent.attendance)
console.log(thirdStudent)
console.log(`
  name: ${thirdStudent.name}
  surname: ${thirdStudent.surname}
  age: ${thirdStudent.getAge()}
  average rating: ${thirdStudent.getAverageGrade()}
  grade: ${thirdStudent.summary()}
`)