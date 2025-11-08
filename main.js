// Home task 6.3
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

let contacts = {
  abonents: [
    {name: "Nata", phoneNumber: "+380937340271", email: "n@gmail.com"},
    {name: "Katya", phoneNumber: "+380939353251", email: "k@gmail.com"},
    {name: "Anya", phoneNumber: "+380677300235", email: "a@gmail.com"}
  ],
  findAbonentByName() {
    let abonent = prompt("enter the name of abonent")
    let findAbonent = this.abonents.find((a) => a.name.toLowerCase() === abonent.toLowerCase())
    if (findAbonent) {
      console.log(`abonent: ${findAbonent.name}, phone number: ${findAbonent.phoneNumber}, e-mail: ${findAbonent.email}`)
    } else {
      console.log(`We don't find an abonent with the name ${abonent}`)
    }
  },
  toDoNewAbonent() {
    let newName = prompt('Enter the name of new abonent')
    let newPhonenumber = prompt(`Enter abonen's phone number`)
    let newEmail = prompt(`Enter abonent's e-mail`)
    this.abonents.push({name: newName, phoneNumber: newPhonenumber, email: newEmail})
    console.log(`New abonent: ${newName}, phone number: ${newPhonenumber}, e-mail: ${newEmail}`)
    console.log(this.abonents)
  }
}

contacts.findAbonentByName()
contacts.toDoNewAbonent ()