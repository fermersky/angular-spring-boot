package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.models.Book;
import org.fermer.danielapi.repositories.AuthorRepository;
import org.fermer.danielapi.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
