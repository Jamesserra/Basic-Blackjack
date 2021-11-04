let suits = ['Spades','Diamonds','Clubs','Hearts'];
let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

let playerHand = [],
    points = 0,
    deck = [];

function startGame() {
    createDeck();
    shuffleDeck(deck);
    dealHand();
    hand();
    updateHand()
}

function updateHand() {
  alert("Your cards are.. ")
  for(let i = 0; i < playerHand.length; i++) {
    alert(playerHand[i].Value + " of " + playerHand[i].Suit);
  }
  alert("Giving you a score of " + points)
  checkScore();
}

function createDeck() {
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let weight = parseInt(values[j]);
            if(values[j] == 'J' || values[j] == 'Q' || values[j] == 'K') {
              weight = 10;
            }
            if(values[j] == 'A') {
              weight = 11;
            }
            let card = {Value: values[j], Suit: suits[i], Weight: weight};
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    let count = deck.length;
    while(count) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
        count -= 1;
    }
}

function hand() {
  points = 0;
  for(let i = 0; i < playerHand.length; i++) {
    points += playerHand[i].Weight;
  }
}

function dealHand() {
    for (let i = 0; i < 2; i++) { 
        playerHand.push(getCard());  
    }
}

function getCard() {
   let card = deck.pop();  
   return card;
}

function checkScore() {
  if (points>21) {
      alert("Bust!");
      playAgain();
  } else if (points == 21) {
      alert("You Win!")
      playAgain();
  } else {
      nextMove();
  }
}

function nextMove() {
  let r = confirm("Would you like to hit or stay?");
    if (r == true) {
      playerHand.push(getCard());  
      hand();
      updateHand();
    } else {
      alert("Your score is " + points + ", not quite blackjack");
    }
}

function hitMe() {
  let newCard = getCard();  
  playerHand.push(newCard);
}

function playAgain() {
    let r = confirm("Play Again?");
    if (r == true) {
       deck = [];
       playerHand = [];
       points = 0;
      startGame();
    } else {
      return;
    }
  }

startGame();