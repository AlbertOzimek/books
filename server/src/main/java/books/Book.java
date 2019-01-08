package books;

import java.sql.Date;

public class Book {
	private String id;
	private String title;
	private String publicationDate;
	private String publisher;
	private double price;
	
	public Book(String id, String title, String publicationDate, String publisher, double price) {
		super();
		this.id = id;
		this.title = title;
		this.publicationDate = publicationDate;
		this.publisher = publisher;
		this.price = price;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPublicationDate() {
		return publicationDate;
	}
	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
}
