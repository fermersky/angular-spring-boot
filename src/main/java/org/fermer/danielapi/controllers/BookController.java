package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.dtos.BookDto;
import org.fermer.danielapi.models.Author;
import org.fermer.danielapi.models.Book;
import org.fermer.danielapi.models.Image;
import org.fermer.danielapi.repositories.AuthorRepository;
import org.fermer.danielapi.repositories.BookRepository;
import org.fermer.danielapi.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200") // for angular client app
@RestController
@RequestMapping("/api")
public class BookController extends RestControllerBase {
    private final BookRepository bookRepository;

    private final AuthorRepository authorRepository;

    private final ImageRepository imageRepository;

    public BookController(BookRepository bookRepository, AuthorRepository authorRepository, ImageRepository imageRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.imageRepository = imageRepository;
    }

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = bookRepository.findAll();

            if (books == null || books.isEmpty()) {
                return notFound();
            }

            return ok(books);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @GetMapping("/books/by/author/{id}")
    public ResponseEntity<?> getBooksByAuthor(@PathVariable(name = "id") long authorId) {
        try {
            List<Book> booksByAuthor = bookRepository.findByAuthor(authorId);

            return ok(booksByAuthor);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id")long id) {
        try {
            Optional<Book> book = bookRepository.findById(id);

            if (book.isEmpty()) {
                return notFound();
            }

            return ok(book.get());
        } catch (Exception ex) {
            return internalError();
        }
    }

    @PostMapping("/books")
    public ResponseEntity<Book> createBook(@RequestBody BookDto book) {
        try {
            Optional<Author> author = authorRepository.findById(book.getAuthorId());

            if (author.isEmpty()) {
                return notFound();
            }

            Optional<Image> image = imageRepository.findById(book.getImageId());

            if (image.isEmpty()) {
                return notFound();
            }

            Book bookToSave = new Book(
                    book.getTitle(),
                    book.getGenre(),
                    book.getYear(),
                    book.getFilename(),
                    book.getDescription(),
                    image.get(),
                    author.get()

            );
            bookRepository.save(bookToSave);

            return created(bookToSave);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") long id, @RequestBody BookDto book){
        try {
            Optional<Book> bookOptional = bookRepository.findById(id);

            if (bookOptional.isEmpty()) {
                return notFound();
            }

            Book bookToUpdate = bookOptional.get();

            bookToUpdate.setTitle(book.getTitle());
            bookToUpdate.setGenre(book.getGenre());
            bookToUpdate.setYear(book.getYear());
            bookToUpdate.setFilename(book.getFilename());
            bookToUpdate.setDescription(book.getDescription());

            if (book.getAuthorId() != null) {
                Optional<Author> author = authorRepository.findById(book.getAuthorId());

                if (author.isEmpty()) {
                    return notFound();
                }

                bookToUpdate.setAuthor(author.get());
            }

            if (book.getImageId() != null) {
                Optional<Image> image = imageRepository.findById(book.getImageId());

                if (image.isEmpty()) {
                    return notFound();
                }

                bookToUpdate.setImage(image.get());
            }

            Book result = bookRepository.save(bookToUpdate);

            return ok(result);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id")long id) {
        try {
            bookRepository.deleteById(id);
            return noContent();
        } catch (Exception e) {
            return internalError();
        }
    }

    @DeleteMapping("/books/")
    public ResponseEntity<HttpStatus> deleteAllBooks() {
        try {
            bookRepository.deleteAll();
            return noContent();
        } catch (Exception ex) {
            return internalError();
        }
    }
}
