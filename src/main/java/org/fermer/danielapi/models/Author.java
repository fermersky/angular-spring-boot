package org.fermer.danielapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "authors")
public class Author {
    private static final long serialVersionUID = 1L;

    // properties

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "image_id")
    private Image image;

    @JsonIgnore
    @OneToMany(mappedBy = "author", cascade = CascadeType.REMOVE)
    private List<Book> books = new ArrayList<Book>();

    public Author() {}

    public Author(long id, String firstname, String lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public Author(String firstname, String lastname, Image image) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
    }

    // getters and setters


    public long getId() {
        return id;
    }

    //

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getFirstname() {
        return firstname;
    }

    //

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getLastname() {
        return lastname;
    }

    //

    public void setImage(Image image) {
        this.image = image;
    }

    public Image getImage() {
        return image;
    }

    //

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    public List<Book> getBooks() {
        return books;
    }
}
