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
createNewQuote('Only a life lived for others is a life worthwhile.', 'Albert Einstein');
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

    if (randomQuote.quote === quotePlace.innerText) {
        displayQuote();
    } else {
        quotePlace.innerText = randomQuote.quote;
        personPlace.innerText = randomQuote.person;
    }

}

// Implementing New Quote button

const newQuoteButton = document.querySelector('.new-quote-btn');
newQuoteButton.addEventListener('click', displayQuote);

// Handling modal activation and deactivation

function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

const addQuoteButton = document.querySelector('.open-btn');
addQuoteButton.addEventListener('click', openModal);

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

const closeModalButton = document.querySelector('#close-btn');
closeModalButton.addEventListener('click', closeModal);

const submitButton = document.getElementById('add-quote-btn');
submitButton.addEventListener('click', closeModal);



// Making the initial quote random

displayQuote();