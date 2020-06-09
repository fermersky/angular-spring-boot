package org.fermer.danielapi.dtos;

public class AuthorDto {
    private String firstname;
    private String lastname;
    private Long imageId;

    public AuthorDto(String firstname, String lastname, Long imageId) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.imageId = imageId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }
}
