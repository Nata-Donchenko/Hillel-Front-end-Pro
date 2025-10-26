// homeTask 3.1.
console.log("3.1. string:", typeof "Hello")
console.log("3.1.number:", typeof 123)
console.log("3.1.BigInt:", typeof 1234567890123456789012345678901234567890n)
console.log("3.1.boolean:", typeof true)
console.log("3.1.undefined:", typeof undefined)
console.log("3.1.null:", typeof null)
console.log("3.1.symbol:", typeof Symbol("key"))
console.log("3.1.object:", typeof {name: "Nata", age: 34})

// homeTask 3.2.
let name = prompt("Whay is your name?")
let lastName = prompt("What is your last name?")
let contry = prompt("What is your contry?")
console.log(`3.2. Hello, ${name} ${lastName} from ${contry}!`)

// homeTask 3.3.
let num = prompt("Enter some number without spaces")
console.log("3.3. result:", num.split("").toString().replaceAll(",", " "))