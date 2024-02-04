// let firstCard = 11
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got blackjack! 🥳")
// } else {
//     console.log("You're out of the game! 😭")
// }

// let age = 20

// if (age < 21) {
//     console.log("You cannot enter the club!")
// } else {
//     console.log("Welcome to the club!")
// }

// let age = 100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Hear ye, hear ye, here is your birthday card from the King!")
// } else {
//     console.log("Nice try, you already got a card from the King!")
// }

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
// default is that you don't have Blackjack
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// querySelector is more dynamic than getElementById: let sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards[0] + " + " + cards[1];
}

function newCard() {
  let card = 2;
  sum += card;
  renderGame();
}

// console.log(hasBlackjack)
// console.log(isAlive)

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false
