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
        return decompressBytes(picBytes);
    }

    public void setPicBytes(byte[] picBytes) {
        this.picBytes = compressBytes(picBytes);
    }

    public byte[] compressBytes(byte[] data) {
        System.out.println("compressed");

        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }
    public byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }

}
