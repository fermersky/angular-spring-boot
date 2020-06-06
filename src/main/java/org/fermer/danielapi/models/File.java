package org.fermer.danielapi.models;

import javax.persistence.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Entity
@Table(name = "files")
public class File {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "filename")
    private String filename;

    @Column(name = "type")
    private String type;

    @Column(name = "picBytes")
    private byte[] picBytes;

    public File() {}

    public File(String filename, String type, byte[] picBytes) {
        this.filename = filename;
        this.type = type;
        setPicBytes(picBytes);
    }

    // getters and setters

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    //


    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    //


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    //

    public byte[] getPicBytes() {
        return this.picBytes;
    }

    public void setPicBytes(byte[] picBytes) {
        this.picBytes = picBytes;
    }

}
