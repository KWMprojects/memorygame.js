document.addEventListener('DOMContentLoaded', () => {

  const cardCollection = [
    {
      name: 'Beth',
      img: './Images/Beth.png'
    },
    {
      name: 'BirdPerson',
      img: './Images/BirdPerson.jpg'
    },
    {
      name: 'Ice-T',
      img: './Images/Ice-T.png'
    },
    {
      name: 'Jerry',
      img: './Images/Jerry.png'
    },
    {
      name: 'Morty',
      img: './Images/Morty.png'
    },
    {
      name: 'Meeseeks',
      img: './Images/Mr.Meeseeks.png'
    },
    {
      name: 'PoopyButthole',
      img: './Images/Mr.PoopyButthole.jpg'
    },
    {
      name: 'NoobNoob',
      img: './Images/NoobNoob.png'
    },
    {
      name: 'PickleRick',
      img: './Images/PickleRick.png'
    },
    {
      name: 'Rick',
      img: './Images/Rick.png'
    },
    {
      name: 'Squanchy',
      img: './Images/Squanchy.png'
    },
    {
      name: 'Summer',
      img: './Images/summer.jpg'
    },
    {
      name: 'Beth',
      img: './Images/Beth.png'
    },
    {
      name: 'BirdPerson',
      img: './Images/BirdPerson.jpg'
    },
    {
      name: 'Ice-T',
      img: './Images/Ice-T.png'
    },
    {
      name: 'Jerry',
      img: './Images/Jerry.png'
    },
    {
      name: 'Morty',
      img: './Images/Morty.png'
    },
    {
      name: 'Meeseeks',
      img: './Images/Mr.Meeseeks.png'
    },
    {
      name: 'PoopyButthole',
      img: './Images/Mr.PoopyButthole.jpg'
    },
    {
      name: 'NoobNoob',
      img: './Images/NoobNoob.png'
    },
    {
      name: 'PickleRick',
      img: './Images/PickleRick.png'
    },
    {
      name: 'Rick',
      img: './Images/Rick.png'
    },
    {
      name: 'Squanchy',
      img: './Images/Squanchy.png'
    },
    {
      name: 'Summer',
      img: './Images/summer.jpg'
    }
  ]

  cardCollection.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var turnedOverCards = []
  var turnedOverCardId = []
  var matched = []

  function createBoard(){
    for (let i = 0; i < cardCollection.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', './Images/Cover.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', turnOverCard)
      grid.appendChild(card)
    }
  }

  function checkMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId= turnedOverCardId[0]
    const optionTwoId= turnedOverCardId[1]
    if(turnedOverCards[0] === turnedOverCards[1]){
      alert("MATCH!")
      cards[optionOneId].setAttribute('src', './Images/Matched.png')
      cards[optionOneId].removeEventListener('click', turnOverCard)
      cards[optionTwoId].setAttribute('src', './Images/Matched.png')
      cards[optionTwoId].removeEventListener('click', turnOverCard)
      matched.push(turnedOverCards)
    }
    else{
      cards[optionOneId].setAttribute('src', './Images/Cover.png')
      cards[optionTwoId].setAttribute('src', './Images/Cover.png')
      alert("Keep Trying! :)")
    }
    turnedOverCards = []
    turnedOverCardId = []
    resultDisplay.textContent = matched.length
    if(matched.length === cardCollection.length/2){
      resultDisplay.textContent = 'Winner!'
    }
  }

  function turnOverCard(){
    var cardId = this.getAttribute('data-id')
    turnedOverCards.push(cardCollection[cardId].name)
    turnedOverCardId.push(cardId)
    this.setAttribute('src', cardCollection[cardId].img)
    if (turnedOverCards.length === 2){
      setTimeout(checkMatch, 500)
    }
  }

  createBoard()
})