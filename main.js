// 10.1 Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1000}],
    internals: [{name: 'Jack', salary: 1300}],
    lawyers: {
      firstDepartment: [{name: 'Ann', salary: 2000}, {name: 'Kate', salary: 2000}],
      secondDepartment: [{name: 'Steve', salary: 1100}],
    }
  }
}

function getTotalSalary(obj) {
  if(Array.isArray(obj)) {
    return obj.reduce((sum, worker) => sum + worker.salary, 0)
  }

  let total = 0

  Object.keys(obj).forEach((key) => total += getTotalSalary(obj[key]))

  return total
}

console.log(getTotalSalary(company))