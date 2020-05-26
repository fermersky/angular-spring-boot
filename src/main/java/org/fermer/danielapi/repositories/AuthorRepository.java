package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
