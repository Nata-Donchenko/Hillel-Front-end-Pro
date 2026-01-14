// 17.1. Клас "Калькулятор"
// Створіть клас Calculator, який буде мати методи для виконання базових математичних 
// операцій: додавання, віднімання, множення та ділення.

class Calculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }
}

const calc = new Calculator()
console.log(calc.add(5, 3))
console.log(calc.subtract(10, 4))
console.log(calc.multiply(3, 6))
console.log(calc.divide(8, 2))


// 17.2. Клас "Тренер"
// Створіть клас Coach, який буде представляти тренера. 
// Додайте властивості, такі як ім'я, спеціалізація та рейтинг. 
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

class Coach {
  constructor (name, specialization, rating) {
    this.name = name
    this.specialization = specialization
    this.rating = rating
  }

  displayInfo () {
    console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`)
  }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo()
coach2.displayInfo()


// 17.3. Клас "Банківський рахунок"
// Створіть клас BankAccount, який буде представляти банківський рахунок. 
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
  #balance

  constructor (balance) {
    this.#balance = balance
  }

  deposit(value) {
    return this.#balance += value
  }

  withdraw(value) {
    if(value > this.#balance) {
      console.log("You don't have a money")
      return
    }

    this.#balance -= value
  }

  getBalance() {
    return this.#balance
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance());