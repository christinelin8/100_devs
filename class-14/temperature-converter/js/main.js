document.querySelector('#temp').addEventListener('click', run)

function run() {

  let temperature = document.querySelector('#tempChange').value

  temperature = temperature * 9/5 + 32

  document.querySelector('#tellsNewTempHere').innerText = temperature
}

























// document.querySelector('#yell').addEventListener('click', run)

// function run() {

//     console.log("HELLO TWITCH")

//     let temp = document.querySelector('#firstName').value

//     temp = temp * 9/5 + 32;

//     document.querySelector('#placeToYell').innerText = temp
//   }

