package org.fermer.danielapi.dtos;

public class BookDto {
    private String title;
    private String genre;
    private String description;
    private Long authorId;
    private int year;
    private String filename;
    private Long imageId;

    public BookDto() {}

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    //


    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

    //


    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFilename() {
        return filename;
    }

    //


    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }

    //


    public void setAuthorId(long authorId) {
        this.authorId = authorId;
    }

    public Long getAuthorId() {
        return authorId;
    }

    //

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    //

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public Long getImageId() {
        return imageId;
    }
}
