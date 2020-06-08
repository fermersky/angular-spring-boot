package org.fermer.danielapi.controllers;

import org.fermer.danielapi.core.RestControllerBase;
import org.fermer.danielapi.dtos.TableInfoDto;
import org.fermer.danielapi.dtos.TablesInfoDto;
import org.fermer.danielapi.repositories.AuthorRepository;
import org.fermer.danielapi.repositories.BookRepository;
import org.fermer.danielapi.repositories.FileRepository;
import org.fermer.danielapi.repositories.ImageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin(origins = "http://localhost:4200") // for angular client app
@RestController
@RequestMapping("/api")
public class TablesInfoController extends RestControllerBase {
    final FileRepository fileRepository;
    final AuthorRepository authorRepository;
    final BookRepository bookRepository;
    final ImageRepository imageRepository;

    public TablesInfoController(FileRepository fileRepository, AuthorRepository authorRepository, BookRepository bookRepository, ImageRepository imageRepository) {
        this.fileRepository = fileRepository;
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.imageRepository = imageRepository;
    }

    @GetMapping("/tables/info")
    public ResponseEntity<?> getInfo() {
        Long filesTotalSizeInMb = fromBitsToMegabits(fileRepository.getTotalSizeOfBytes());
        Long imagesTotalSizeInMb = fromBitsToMegabits(imageRepository.getTotalSizeOfBytes());

        var infos = new ArrayList<TableInfoDto>();

        infos.add(new TableInfoDto("Books total count", bookRepository.count()));
        infos.add(new TableInfoDto("Authors total count", authorRepository.count()));
        infos.add(new TableInfoDto("Files total count", fileRepository.count()));
        infos.add(new TableInfoDto("Images total count", imageRepository.count()));
        infos.add(new TableInfoDto("Total size of files", filesTotalSizeInMb, "", "MB"));
        infos.add(new TableInfoDto("Total size of images", imagesTotalSizeInMb, "", "MB"));
        infos.add(new TableInfoDto("Total disk space usage", filesTotalSizeInMb + imagesTotalSizeInMb, "", "MB"));

        return ok(infos);
    }

    private Long fromBitsToMegabits(long bits) {
        return bits / 1000000;
    }
}
