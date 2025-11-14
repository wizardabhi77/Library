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



class Book {
    
    constructor(title,author,pages,read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function(){
            return `Title:${this.title}<br> Author:${this.author}<br> Number Of Pages:${this.pages}<br>`;
        }
    }   

    setReadStatus = function () {
    
        console.log(this.id);
        let card = document.getElementById(this.id);

        if(this.read === true){
            this.read = false;
            card.querySelector('p').textContent = `Have you read?: ${this.read}`;
            return null;
        }
        
        this.read = true;

        card.querySelector('p').textContent = `Have you read?: ${this.read}`;
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

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML= 'DELETE';
    const switchRead = document.createElement('button');
    switchRead.innerHTML = 'SWITCH Read status';


    let book = myLibrary[myLibrary.length-1];


    deleteButton.addEventListener('click', ()=> {
        let deleteCard = document.getElementById(book.id);
        divLibrary.removeChild(deleteCard);
    });
    
    
    switchRead.addEventListener('click', () => book.setReadStatus());
    
    const card =  document.createElement('div');
    const readP = document.createElement('p');
    readP.textContent = `Have you read?: ${book.read}`;
    card.setAttribute('class','card')
    card.setAttribute('id',book.id);
    card.innerHTML = book.info();
    card.appendChild(readP);
    card.appendChild(deleteButton);
    card.appendChild(switchRead);

    divLibrary.appendChild(card);
    
    
    
}


