//const btnmobile = document.getElementById('btn')
/*const card = document.getElementById('card')

card.addEventListener('mouseenter', btnto)
card.removeEventListener('mouseout', btnto)
*/
function btnto(namedriver) {

    const wdc = document.getElementById(`${namedriver}-wordchampionchip`)
    const wins = document.getElementById(`${namedriver}-wins`)
    const pole = document.getElementById(`${namedriver}-pole`)
    const desc = document.getElementById(`${namedriver}-desc`)

    wdc.classList.toggle('esconder')
    wins.classList.toggle('esconder')
    pole.classList.toggle('esconder')
    desc.classList.toggle('mostrar')

}

/*
function btnto(namedriver) {

    const wdc = document.getElementById(`wordchampionchip-${namedriver}`)
    const wins = document.getElementById(`wins-${namedriver}`)
    const pole = document.getElementById(`pole-${namedriver}`)
    const desc = document.getElementById(`desc-${namedriver}`)

    wdc.classList.toggle('esconder')
    wins.classList.toggle('esconder')
    pole.classList.toggle('esconder')
    desc.classList.toggle('mostrar')
}*/