//--- Easy
//create a variable and assign it a number

let varName = 1;

//minus 10 from that number

varName = varName - 10;

//print that number to the console

console.log(varName);

//--- Medium
//create a variable that holds a value from the input

// let inputName = document.querySelector('#danceDanceRevolution').value

// //add 25 to that number

// inputName= inputName + 25;

// //alert that number

// alert(inputName);

//--- Hard
//create a variable that holds the h1

let h1Name = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Name.addEventListener('click', sum)

function sum() {
    let inputName = document.querySelector('#danceDanceRevolution').value
    console.log(varName + Number(inputName))
}
