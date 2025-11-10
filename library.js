const myLibrary = [];
const divLibrary = document.querySelector('.library');
const newButton = document.querySelector('.newButton');
const dialog = document.querySelector("dialog");

newButton.addEventListener('click', addBookToLibrary);

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

function addBookToLibrary() {
    dialog.showModal();
    let book = new Book(title,author,pages,read);
    myLibrary.push(book);
}

function displayLibrary () {
    myLibrary.forEach((book) => {
        const card =  document.createElement('div');
        card.setAttribute('class','card')
        card.innerHTML = book.info();
        divLibrary.appendChild(card);
    })
}


displayLibrary();
