const myLibrary = [];
const divLibrary = document.querySelector('.library');

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

function addBookToLibrary(title,author,pages,read) {
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
addBookToLibrary('WOK','Brandon',1200,true);
addBookToLibrary('WOR','Brandon',1500,true);

displayLibrary();
