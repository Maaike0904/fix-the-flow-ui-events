// Voorbeeld - Interaction
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let kleurInteractie = document.querySelector('a:nth-of-type(1)')

kleurInteractie.addEventListener('click', show)

function show(){
  kleurInteractie.classList.toggle('show')
}

// Dropdown - Design
let dropdown = document.querySelector('a:nth-of-type(2)')

dropdown.addEventListener('click', down)
dropdown.addEventListener('animationed', down)

function down() {
  dropdown.classList.toggle('down')
}

// Turn - &
let draaien = document.querySelector('a:nth-of-type(3)')

draaien.addEventListener('click', turn)
draaien.addEventListener('animationed', turn)

function turn() {
draaien.classList.toggle('turn')
}

// Shaken - Development
let schudden = document.querySelector('a:nth-of-type(4)')

schudden.addEventListener('click', shake)
schudden.addEventListener('animationed', shake)

function shake() {
schudden.classList.toggle('shake')
}

// Regenboog verschijnt - Sprint 5
let regenboog = document.querySelector('a:nth-of-type(5)')

regenboog.addEventListener('click', rainbow)
regenboog.addEventListener('animationed', rainbow)

function rainbow() {
regenboog.classList.toggle('rainbow')
}

// Vergroten - Fix
let groter = document.querySelector('a:nth-of-type(6)')

groter.addEventListener('click', larger)
groter.addEventListener('animationed', larger)

function larger() {
groter.classList.toggle('larger')
}

// Links naar rechts - The
let linksrechtsEffect = document.querySelector('a:nth-of-type(7)')

linksrechtsEffect.addEventListener('click', wiggle)
linksrechtsEffect.addEventListener('animationed', wiggle)

function wiggle() {
linksrechtsEffect.classList.toggle('wiggle')
}

// Ronde button - Flow
let rondeButton = document.querySelector('a:nth-of-type(8)')

rondeButton.addEventListener('click', rond)
rondeButton.addEventListener('animationed', rond)

function rond() {
rondeButton.classList.toggle('rond')
}

// Knipperen - User
let knipperen = document.querySelector('a:nth-of-type(9)')

knipperen.addEventListener('click', blink)
knipperen.addEventListener('animationed', blink)

function blink() {
knipperen.classList.toggle('blink')
}

// Achtergrondkleur veranderd - Interface
let background = document.querySelector('a:nth-of-type(10)')

background.addEventListener('click', change)
background.addEventListener('animationed', change)

function change() {
background.classList.toggle('change')
}

