let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A', '2', '3','4','5','6','7','8','9','10','J','Q','K'];

function createDeck() {
    let deck = new Array();

    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}