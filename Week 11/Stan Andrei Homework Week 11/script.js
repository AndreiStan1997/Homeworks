console.log("It is working");

class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    get title() {
        return this.title;
    }
    set title(x){
        this.title = x;
    }
    get author(){
        return this.author;
    }
    set author(y){
        this.author = y;
    }
}

class Magazine extends Book{
    constructor(title, author, ISBN, issueNumber){
        super(title, author, ISBN);
        this.issueNumber = issueNumber;
    }
    get issueNumber(){
        return this.issueNumber;
    }
    set issueNumber(z){
        this.issueNumber = z;
    }
}

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [books];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(book){
        this.books.pop(book);
    }
    findBooksByAuthor(author){
        this.author = author;
        const Book = [];
        return book;
    }
    listBooks(){
        return this.books;
    }
    getTotalBooks(){
       let number= 10;
       return number;
    }
    getBooksByAuthor(author){
        this.author = author;
        const Book = [];
        return book;
    }
    getBooksWithTitleContaining(keyword){
        this.keyword = keyword;
        return book;
    }
    getUniqueAuthors(ISBN){
        this.ISBN = ISBN;
        return ISBN;
    }
    getTotalBooksByAuthor(author){
        this.author = author;
        let number = 6;
        return number;
    }
    hasAnyBooksByAuthor(author){
        this.author = author;
        return true;
    }
    haveAllBooksByAuthor(author){
        this.author = author;
        return false;
    }
    getBookTiltles(title){
        this.title = title;
        return title;
    }
}