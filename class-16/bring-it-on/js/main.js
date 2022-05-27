// *Variables*
// Create a variable and console log the value

let varName = 5;

console.log(varName);

// Create a variable, add 10 to it, and alert the value

let addTen = 5;

addTen = addTen + 10;

alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}

subtractFour(888, 337, 16, 219)

// Create a function that divides one number by another and returns the remainder

function divideOneNum(num1, num2) {
    return num1 % num2
}

console.log(divideOneNum(12, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(num1, num2) {

if(num1 + num2 > 50) {
        alert("jumanji!")

    }
}
jumanji(40, 20)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyByThree(num1, num2, num3) {
  let product = num1 * num2 * num3

  if(product % 3 === 0) {
      alert("zebra")
    }
  }

  multiplyByThree(3, 3, 1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber(word, num) {
    for(let i = 1; i <= num; i++) {
        console.log(word)
    }
}

wordNumber("keep trying", 21)
