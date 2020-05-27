package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.dtos.BookDto;
import org.fermer.danielapi.models.Author;
import org.fermer.danielapi.models.Book;
import org.fermer.danielapi.repositories.AuthorRepository;
import org.fermer.danielapi.repositories.BookRepository;
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
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

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

    @GetMapping("/books{id}")
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

    @PostMapping("/books/")
    public ResponseEntity<Book> createBook(@RequestBody BookDto book) {
        try {
            Optional<Author> author = authorRepository.findById(book.getAuthorId());

            if (author.isEmpty()) {
                return notFound();
            }

            Book bookToSave = new Book(book.getTitle(), book.getGenre(), book.getYear(), book.getFilename(), author.get());
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
            bookToUpdate.setFilename(book.getFilename());
            bookToUpdate.setYear(book.getYear());

            if (book.getAuthorId() != null) {
                Optional<Author> author = authorRepository.findById(book.getAuthorId());

                if (author.isEmpty()) {
                    return notFound();
                }

                bookToUpdate.setAuthor(author.get());
            }

            Book result = bookRepository.save(bookToUpdate);

            return ok(result);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @DeleteMapping("/books/{id}")
    private ResponseEntity<HttpStatus> deleteBook(@PathVariable("id")long id) {
        try {
            bookRepository.deleteById(id);
            return noContent();
        } catch (Exception e) {
            return internalError();
        }
    }
}
