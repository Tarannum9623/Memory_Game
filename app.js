const cardArray=[
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardChosen=[]
let cardChosenIds=[]
const cardsWon=[]

function createBoard() {
    for(let i=0;i<12;i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
    console.log(cardArray)
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const firstId=cardChosenIds[0]
    const secondId=cardChosenIds[1]

    console.log('check for match')
    if(firstId==secondId){
        cards[firstId].setAttribute('src','images/blank.png')
        cards[secondId].setAttribute('src','images/blank.png')
        alert('You clicked the same image!')
    }
    if(cardChosen[0]==cardChosen[1]){
        alert('You Found a Match!!')
        cards[firstId].setAttribute('src','images/white.png')
        cards[secondId].setAttribute('src','images/white.png')
        cards[firstId].removeEventListener('click',  flipCard)
        cards[secondId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardChosen)
        
    }else {
        cards[firstId].setAttribute('src','images/blank.png')
        cards[secondId].setAttribute('src','images/blank.png')
        alert('Sorry! Try again')
    }

    resultDisplay.innerHTML=cardsWon.length
    cardChosen=[]
    cardChosenIds=[]

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML='Congratulation! You found them all!!'
    }
}
function flipCard() {
    const cardId=this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)

    // console.log(cardChosen)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length===2){
        setTimeout(checkMatch, 500)
    }
}