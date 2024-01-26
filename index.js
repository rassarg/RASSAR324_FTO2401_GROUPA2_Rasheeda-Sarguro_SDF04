let player = {
    name: "Rasheeda",
    chips: 200
}
// What we haven't covered is how to make lines 2(player name) input something that is not hard coded, so that the user can add that themselves.
// Or would that be done in the HTML rather?

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips 
// the JS syntax is still a struggle for me. Because I can't understand why it changes when we did it at the practice versus when applying it
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1  // this was complicated for me to grasp/ 
    if (randomNumber > 10) {                               // I had to understand why the 'let' variable is within the function
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
// math is my mortal enemy and I havent had to do maths since 2007. So learning the 'if else' part took me painfully long.
// not to mention, I didnt understand why line 24 is 'else if (randomNumber === 1) {' and not just (if randomNumber < 2) return 11

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard // again I got confused here with the difference in syntax on line 37 and 38
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // understanding that the [i] is inside square brackets took a while to learn. 
    }                                          // I also don't fully grasp the += in line 45
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
// Grasping that a .textContent element can be added to a function also took some time to understand

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
// All in all, the hardest part for me with JS is understanding what code comes when. The syntax jumps around so much
// in comparison to CSS and HTML which is more structured, I struggled a LOT with knowing what to write when with JS.
// Once I had seen the solution, I understood why, but knowing when to recall it myself is still a struggle.