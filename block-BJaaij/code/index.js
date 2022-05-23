class Book{
    constructor(title, category, author, isread = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isread = isread;
        this.finishedDate = finishedDate;
    }
    marksBookAsRead (){
        this.isread = !this.isread;
        return (this.finishedDate = Date.now());
    }
}

class BookList {
    constructor(books,index){
        this.books = books;
        this.index = index;
    }
    add(book) {
        this.book = this.book.concat(book)
    }
    getCurrentBook (){
        return this.book[this.index];
    }
    getNextBook(){
        return this.book[this.index + 1];
    }
    getPreviousBook(){
        return this.book[this.index - 1];
    }
    changeCurrentBook(para){
        return this.index = para;
    }
}
let book1 = new Book("The Alchemist", "Fiction", "Paulo Coehlo", false, 2012);