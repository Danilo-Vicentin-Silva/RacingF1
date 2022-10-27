const ferrariCard = document.querySelector('#ferrariCard')
const ferrariCard1 = document.querySelector('#ferrariCard1')
ferrariCard.addEventListener('click', () => {
    ferrariCard1.style.display = 'block'
})
const esconderFerrari = document.querySelector('#esconderFerrari')
esconderFerrari.addEventListener('click', () => esconderCard1(ferrariCard1))

const mercedesCard = document.querySelector('#mercedesCard')
const mercedesCard1 = document.querySelector('#mercedesCard1')
mercedesCard.addEventListener('click', () => mercedesCard1.style.display = 'block')
const esconderMercedes = document.querySelector('#esconderMercedes')
esconderMercedes.addEventListener('click', () => esconderCard1(mercedesCard1))

const mclarenCard = document.querySelector('#mclarenCard')
const mclarenCard1 = document.querySelector('#mclarenCard1')
mclarenCard.addEventListener('click', () => mostrarCard(mclarenCard1))
const esconderMclaren = document.querySelector('#esconderMclaren')
esconderMclaren.addEventListener('click', () => esconderCard1(mclarenCard1))

const williamsCard = document.querySelector('#williamsCard')
const williamsCard1 = document.querySelector('#williamsCard1')
williamsCard.addEventListener('click', () => mostrarCard(williamsCard1))
const esconderWilliams = document.querySelector('#esconderWilliams')
esconderWilliams.addEventListener('click', () => esconderCard1(williamsCard1))


function mostrarCard(card) {
    card.style.display = 'block'
}
function esconderCard1(card) {
    card.style.display = 'none'
}


