const myLibrary = [];

function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(title,author,pages,read) {
    let book = new Book(title,author,pages,read);
    myLibrary.push(book);
}

addBookToLibrary('WOK','Brandon',1200,true);
addBookToLibrary('WOR','Brandon',1500,true);

console.log(myLibrary);
