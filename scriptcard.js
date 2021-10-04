const btnmobile = document.getElementById('btn')

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