package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
