package org.fermer.danielapi.models;

import javax.persistence.*;

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

    @Column(name = "description")
    private String description;

    @Column(name = "year")
    private int year;

    @Column(name = "downloadsCount")
    private int downloadsCount = 0;

    @Column(name = "filename")
    private String filename;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "image_id")
    private Image image;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "author_id")
    private Author author;

    public Book() {}

    public Book(String title, String genre, int year, String filename, String description, Image image, Author author) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.filename = filename;
        this.image = image;
        this.author = author;
        this.description = description;
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

    //

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
