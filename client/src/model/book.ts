export class Book {
    private id: string;
    private title: string;
    private author: string;
    private publicationDate;
    private publisher;
    private price;

    constructor(id: string, title: string, author: string, publicationDate, publisher, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.publisher = publisher;
        this.price = price;
    }
}
