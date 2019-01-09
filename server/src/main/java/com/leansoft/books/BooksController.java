package com.leansoft.books;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BooksController {
	
	@Autowired
	private BookService bookService;
	
	@RequestMapping("/books")
	public List<Book> getAllBooks() {
		return this.bookService.getAllBooks();
	
	}
	
	@RequestMapping("/books/{id}")
	public Book getBook(@PathVariable String id) {
		return this.bookService.getBook(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/books")
	public void addBook(@RequestBody Book book) {
       this.bookService.addBook(book);
    }
}
