let suits = ['Spades','Diamonds','Clubs','Hearts'];
let values = ['A', '2', '3','4','5','6','7','8','9','10','J','Q','K'];
let deck = new Array();
let player = new Array();
let points = 0;

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

function createPlayer() {
  let hand = new Array();
  let user = { Points: 0, Hand: hand };
  player.push(user);
}

function startGame() {
    createDeck();
    shuffleDeck(deck);
    createPlayer();
    dealHand();
    getScore();
}

function dealHand() {
    for (let i = 0; i < 2; i++) {
        let card = deck.pop();    
        updatePoints(card);
    }
}
 function updatePoints(card) {
   console.log(card);
   points += card.Weight;
   console.log(points);
   return points;
 }

function getScore() {
  if(points > 21) {
    console.log("you loose");
  }
  if(points == 21) {
    console.log("you win");
  } else {
    console.log("Hit or Stand? (eg 1 or 2)");
  }
}

startGame();