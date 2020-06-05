package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.repositories.FileRepository;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.*;
import org.fermer.danielapi.models.File;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class FileController extends RestControllerBase {
    private final FileRepository fileRepository;

    public FileController(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    @GetMapping("/files/get/{filename}")
    public ResponseEntity<?> downloadFile(@PathVariable("filename") String filename) throws IOException {

        var retrievedFile = fileRepository.findByFilename(filename);

        if (retrievedFile.isEmpty()) {
            return notFound();
        }

        byte[] bytes = retrievedFile.get().getPicBytes();
        InputStreamResource resource = new InputStreamResource(new ByteArrayInputStream(bytes));

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(MediaType.APPLICATION_OCTET_STREAM_VALUE))
                .body(resource);
    }

    @PostMapping("/files/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        File fileToUpload = new File(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        fileRepository.save(fileToUpload);

        return created(fileToUpload);
    }
}
