package org.fermer.danielapi.repositories;

import org.fermer.danielapi.core.additionalmodels.AuthorWithoutImage;
import org.fermer.danielapi.core.repositories.author.AuthorRepositoryCustom;
import org.fermer.danielapi.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    @Query(value = "select new org.fermer.danielapi.models.Author(a.id, a.firstname, a.lastname) from Author a")
    List<Author> findAllWithoutImages();
}
