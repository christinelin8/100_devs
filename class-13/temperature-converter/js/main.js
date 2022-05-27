//Write your pseduo code first! 

//celsius to farenheit 


document.querySelector('#change').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#cel').value
    temp = temp * 9/5 + 32

    document.querySelector('#celsiusConverter').innerText =  temp
      
    }




