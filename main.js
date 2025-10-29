// homeTask 4.2.

let userNumber = prompt("enter a three-digit number")
userNumber = userNumber.split("")

if (userNumber[0] === userNumber[1] && userNumber[0] === userNumber[2]) {
    console.log("all numbers are equal")
} else if ((userNumber[0] === userNumber[1] || userNumber[0] === userNumber[2]) || (userNumber[1] === userNumber[2] || userNumber[1] === userNumber[0])) {
    console.log("two numbers are equal")
} else {
    console.log("no equal numbers")
}