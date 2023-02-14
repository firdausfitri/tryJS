/*
Assignment
1. input kredit awal, kredit yg ingin ditambah dan hutang yg ada, dan outputkan kredit akhir
2. outputkan hari program ni dibuka mengikut hari di pc user tersebut "today is "

*/


var num1 = prompt("What is your initial credit?")
var num2 = prompt("How much credit you want to add?")

var initCredit = parseInt(num1)
var addCredit = parseInt(num2)
const totalCredit = initCredit+addCredit

alert(`Your credit is ${totalCredit}`)


let d = new Date()
let day = d.getDay()

switch (day) {
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break

    case 3:
        console.log("Today is Wednesday")
        break

    case 4:
        console.log("Today is Thursday")
        break

    case 5:
        console.log("Today is Friday")
        break

    case 6:
        console.log("Today is Saturday")
        break

    case 7:
        console.log("Today is Sunday")
        break
    default:
        console.log("Day invalid")

}