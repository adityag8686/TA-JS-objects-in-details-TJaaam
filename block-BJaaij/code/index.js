class Book extends Booklist{
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isread = false;
        this.finishedDate = null;
    }
    marksBookAsRead (){
        this.isread = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor(){
        this.books = [];
        this.index = index;
    }
    add(books) {
        this.books = this.books.push(book)
        return this.books
    }
    getCurrentBook (){
        return this.books[this.index];
    }
    getNextBook(){
        return this.books[this.index + 1];
    }
    getPreviousBook(){
        return this.books[this.index - 1];
    }
    changeCurrentBook(index){
        return this.index = index;
    }
}
let book1 = new Book("The Alchemist", "Fiction", "Paulo Coehlo", false, 2012);