package books;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksController {
	
	@RequestMapping("/books")
	public List<Book> getAllBooks() {
		return Arrays.asList(
				new Book("111", "Eine kurze Geschichte der Menscheit", "2016", "DVA", 36),
				new Book("222", "Homo Deus", "2017", "CHBECK", 37));
	}

}
