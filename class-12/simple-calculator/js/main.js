// addingTen, dividingFive, subtractingFour, multiplyingThree

let total = 0

document.querySelector('#addingTen').addEventListener('click', addTen)
document.querySelector('#dividingFive').addEventListener('click', divideFive)
document.querySelector('#subtractingFour').addEventListener('click', subtractFour)
document.querySelector('#multiplyingThree').addEventListener('click', multiplyThree)

function addTen() {
  total = total + 10
  document.querySelector('#result').innerText = total
}

function divideFive() {
  total = total / 5
  document.querySelector('#result').innerText = total
}

function subtractFour() {
  total = total - 4
  document.querySelector('#result').innerText = total
}

function multiplyThree() {
  total = total * 3
  document.querySelector('#result').innerText = total
}

// let total = 0

// document.querySelector('#zero').addEventListener('click', justZero)
// document.querySelector('#addingThree').addEventListener('click', three)
// document.querySelector('#addingNine').addEventListener('click', nine)
// document.querySelector('#subtractTwo').addEventListener('click', two)

// function justZero() {
//   total = 0
//   document.querySelector('#result').innerText = total
// }

// function three() {
//   total = total + 3
//   document.querySelector('#result').innerText = total
// }

// function nine() {
//   total = total + 9
//   document.querySelector('#result').innerText = total
// }

// function two() {
//   total = total - 2
//   document.querySelector('#result').innerText = total
// }



