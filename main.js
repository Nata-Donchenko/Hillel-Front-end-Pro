// Home task 6.1
//Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

let user = {
  name: 'Nata',
  age: 34,
  city: 'Pivdenne',
  id: 1,
  getUserInfo () {
    console.log (`User's name is ${this.name}`)
    console.log (`User's age is ${this.age}`)
    console.log (`User is living in ${this.city}`)
    console.log (`User's id is ${this.id}`)
  }
}

user.getUserInfo()