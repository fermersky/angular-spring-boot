package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("select new Book(b.id, b.downloadsCount) from Book b where b.filename = :filename")
    Optional<Book> findByFilename(@Param("filename") String filename);

    @Query("select new Book(b.id, b.title, b.genre, b.year, b.filename, b.description, b.image, b.author) from Book b where b.author.id = :authorId")
    List<Book> findByAuthor(@Param("authorId") long authorId);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update Book b set b.downloadsCount = :downloadsCount where b.id = :id")
    void updateDownloadsCountById(@Param("id") long id, @Param("downloadsCount") int downloadsCount);
}
