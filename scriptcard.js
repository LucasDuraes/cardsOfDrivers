const btnmobile = document.getElementById('btn')
const card = document.getElementById('card')

card.addEventListener('mouseenter', btnto)
card.removeEventListener('mouseout', btnto)

function btnto() {
    
    const wdc = document.getElementById('wordchampionchip')
    const wins = document.getElementById('wins')
    const pole = document.getElementById('pole')
    const desc = document.getElementById('desc')

    wdc.classList.toggle('esconder')
    wins.classList.toggle('esconder')
    pole.classList.toggle('esconder')
    desc.classList.toggle('mostrar')
}