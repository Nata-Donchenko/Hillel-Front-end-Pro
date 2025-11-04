// homeTask 5.2.
//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let dollars = [10, 20, 30, 40, 50, 60 ,70, 80, 90, 100]
let priceOfDollar = 26

for (const dollar of dollars) {
  let totalPrice = dollar * priceOfDollar
  console.log(`for ${dollar} dollars price is ${totalPrice}`)
}