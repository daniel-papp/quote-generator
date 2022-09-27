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
    const overlay = document.getElementsByClassName('overlay');

    modal.classList.add('active');
    overlay[0].classList.toggle('active');
}

const addQuoteButton = document.querySelector('.open-btn');
addQuoteButton.addEventListener('click', openModal);

function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementsByClassName('overlay');

    modal.classList.remove('active');
    overlay[0].classList.toggle('active');

    clearErrorMessage('quote');
    clearErrorMessage('person');
}

const closeModalButton = document.querySelector('#close-btn');
closeModalButton.addEventListener('click', closeModal);

const addButton = document.getElementById('add-quote-btn');

// Adding new user defined quotes to the collection

function addNewQuoteToCollection() {
    const newQuote = document.getElementById('quote').value;
    const newPerson = document.getElementById('person').value;

    clearErrorMessage('quote');
    clearErrorMessage('person');

    if (newQuote === '' && newPerson === '') {
        displayErrorMessage('quote');
        displayErrorMessage('person');
        return;
    } else if (newQuote === '') {
        displayErrorMessage('quote');
        return;
    } else if (newPerson === '') {
        displayErrorMessage('person');
        return;
    }

    createNewQuote(newQuote, newPerson);

    document.getElementById('quote').value = '';
    document.getElementById('person').value = '';

    closeModal();
}

addButton.addEventListener('click', addNewQuoteToCollection);

// Error message 

function displayErrorMessage(fieldName) {
    const field = document.getElementById(fieldName);
    const label = document.querySelector(`label[for=${fieldName}]`);
    
    field.classList.add('error-field');
    label.classList.add('error-msg');
}

function clearErrorMessage(fieldName) {
    const field = document.getElementById(fieldName);
    const label = document.querySelector(`label[for=${fieldName}]`);
    
    field.classList.remove('error-field');
    label.classList.remove('error-msg');
}


// Making the initial quote random

displayQuote();