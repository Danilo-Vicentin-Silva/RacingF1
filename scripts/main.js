const card1 = document.querySelector('.card1')

const mercedesCard = document.querySelector('#mercedesCard')
const mercedesCard1 = document.querySelector('#mercedesCard1')
mercedesCard.addEventListener('click', () => mercedesCard1.style.display = 'block')

const esconderCard = document.querySelector('.esconderCard')
esconderCard.addEventListener('click', () => card1.style.display = 'none')

