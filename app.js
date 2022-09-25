// Creating the quote collection

const quoteCollection = [];

class Quote {
    constructor(quote, person) {
        this.quote = quote;
        this.person = person;
    }
}

function createNewQuote(quote, person) {
    const newQuote = new Quote(quote, person);
    quoteCollection.push(newQuote);
}

// Preloaded quotes

createNewQuote('The journey of a thousand miles begins with one step.','Lao Tzu');
createNewQuote('Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'Benjamin Franklin');
createNewQuote('Only a life lived for others is a life worthwhile', 'Albert Einstein');
createNewQuote('Success is not final; failure is not fatal: It is the courage to continue that counts.', 'Winston S. Churchill');
createNewQuote('An unexamined life is not worth living.', 'Socrates');

// Picking and displaying a quote

function pickRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quoteCollection.length);
    const randomQuote = quoteCollection[randomNumber];   
    return randomQuote;
}

function displayQuote() {
    const quotePlace = document.querySelector('.quote');
    const personPlace = document.querySelector('.person');

    const randomQuote = pickRandomQuote();

    quotePlace.innerText = randomQuote.quote;
    personPlace.innerText = randomQuote.person;
}

// Implementing New Quote button

const newQuoteButton = document.querySelector('.new-quote-btn');
newQuoteButton.addEventListener('click', displayQuote);