document.querySelector('#check').addEventListener('click', buttonCheck)

function buttonCheck() {
  const day = document.querySelector('#day').value

  if(day === "Monday" || day === "Wednesday") {
    alert("Very boring days")
  }
  else if(day === "Tuesday" || day === "Thursday") {
    alert("Also boring days")
  }
  else {
    alert("Ahh it's the weekend!")
  }
}








// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   //Conditionals go here
//   if(day === "Monday" || day === "Wednesday") {
//     alert("Worst days ever")
//   }
//   else if(day === "Tuesday" || day === "Thursday") {
//     alert("Also equally worst days ever")
//   }
//   else {
//     alert("It's the weekend!")
//   }
// }