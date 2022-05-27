//these query selectors are targeting the pictures with these ids

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')


//targeting the h2 and creating functions for them
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

//functions created with the names from the addEventListener

function andiNext() {
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function claireNext() {
	claire.classList.toggle('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function sharleenNext() {
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
	claire.classList.add('hidden')
}

















































// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }
