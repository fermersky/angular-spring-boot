package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.models.Author;
import org.fermer.danielapi.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200") // for angular client app
@RestController
@RequestMapping("/api")
public class AuthorController extends RestControllerBase {
    @Autowired
    private AuthorRepository authorRepository;

    @GetMapping("/authors")
    public ResponseEntity<List<Author>> getAllAuthors(@RequestParam(name = "withImages", defaultValue = "true")boolean withImages) {
        try {
            List<Author> authors = null;

            if (withImages) {
                authors = authorRepository.findAll();
            } else {
                authors = authorRepository.findAllWithoutImages();
            }

            if (authors == null || authors.isEmpty()) {
                return notFound();
            }

            return ok(authors);
        } catch (Exception ex) {
            return internalError();
        }
    }

    @GetMapping("/authors/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable("id")long id) {
        try {
            Optional<Author> author = authorRepository.findById(id);

            if (author.isEmpty()) {
                return notFound();
            }

            return ok(author.get());
        } catch (Exception ex) {
            return internalError();
        }
    }

    @PostMapping("/authors")
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        try {
            Author authorToSave = authorRepository
                    .save(new Author(author.getFirstname(), author.getLastname(), null));
            return created(authorToSave);
        } catch (Exception e) {
            return internalError();
        }
    }

    @PutMapping("/authors/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable("id") long id, @RequestBody Author author) {
        try {
            Optional<Author> authorOptional = authorRepository.findById(id);

            if (authorOptional.isPresent()) {
                Author authorToUpdate = authorOptional.get();

                authorToUpdate.setFirstname(author.getFirstname());
                authorToUpdate.setLastname(author.getLastname());
                authorToUpdate.setImage(author.getImage());

                Author result = authorRepository.save(authorToUpdate);

                return ok(result);
            }

            return notFound();
        } catch (Exception e) {
            return internalError();
        }
    }

    @DeleteMapping("/authors/{id}")
    private ResponseEntity<HttpStatus> deleteAuthor(@PathVariable("id")long id) {
        try {
            authorRepository.deleteById(id);
            return noContent();
        } catch (Exception e) {
            return internalError();
        }
    }
}
