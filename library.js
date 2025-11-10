const myLibrary = [];
const divLibrary = document.querySelector('.library');
const newButton = document.querySelector('.newButton');
const dialog = document.querySelector("dialog");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitButton = document.querySelector('.submitButton');


newButton.addEventListener('click', () => dialog.showModal());
submitButton.addEventListener('click', addBookToLibrary);

function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `Title:${this.title}<br> Author:${this.author}<br> Number Of Pages:${this.pages}<br> Have Read?:${this.read}`
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    const readInput = document.querySelector('input[name="read"]:checked');
    let read = readInput.value;
    let book = new Book(title,author,pages,read);
    myLibrary.push(book);
    dialog.close();
    displayLibrary();
}

function displayLibrary () {
    let book = myLibrary[myLibrary.length-1];
    const card =  document.createElement('div');
    card.setAttribute('class','card')
    card.innerHTML = book.info();
    divLibrary.appendChild(card);
}


