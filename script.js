let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A', '2', '3','4','5','6','7','8','9','10','J','Q','K'];
let deck = new Array();

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

function startGame() {
    createDeck();
    shuffleDeck(deck);
    dealHand();
}

function dealHand() {
    for (let i = 0; i < 2; i++) {
        let cards = deck.pop();
        console.log(cards)
        //updatePoints();
    }
  //updateDeck()?
}

startGame();