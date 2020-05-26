package org.fermer.danielapi.models;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Optional;

@Entity
@Table(name = "books")
public class Book {
    private static final long serialVersionUID = 1L;

    // properties

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "year")
    private int year;

    @Column(name = "downloadsCount")
    private int downloadsCount = 0;

    @Column(name = "filename")
    private String filename;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "author_id")
    private Author author;

    public Book() {}

    public Book(String title, String genre, int year, String filename, Author author) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.filename = filename;
        this.author = author;
    }

    // getters and setters


    public long getId() {
        return id;
    }

    //

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    //

    public void setDownloadsCount(int downloadsCount) {
        this.downloadsCount = downloadsCount;
    }

    public int getDownloadsCount() {
        return downloadsCount;
    }

    //

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    //

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    //

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    //

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}
