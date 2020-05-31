package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.models.Image;
import org.fermer.danielapi.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200") // for angular client app
@RestController
@RequestMapping("/api")
public class ImageController extends RestControllerBase {
    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/images/upload")
    public ResponseEntity<Image> upload(@RequestParam("imageFile") MultipartFile file) throws IOException, IOException {
        Image img = new Image(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        imageRepository.save(img);

        return created(img);
    }

    @GetMapping(path = { "/images/get/{id}" })
    public ResponseEntity<Image> getImage(@PathVariable("id") long id) throws IOException {
        Optional<Image> retrievedImage = imageRepository.findById(id);

        if (retrievedImage.isEmpty()) {
            return notFound();
        }

        Image imageNotNull = retrievedImage.get();

        return ok(imageNotNull);
    }

}
