document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'monday' || day === 'wednesday') {
    console.log("boring school days")
  }
  else if(day === 'friday' || day === 'saturday' || day === 'sunday') {
    console.log('turn up its the weekend!')
  }
  else {
    console.log("good luck, idk what you typed")
  }
}































//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }

