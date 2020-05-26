package org.fermer.danielapi.core;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RestControllerBase {
    protected <T> ResponseEntity ok(T model) {
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    protected ResponseEntity notFound() {
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    protected <T> ResponseEntity created(T model) {
        return new ResponseEntity<T>(model, HttpStatus.CREATED);
    }

    protected ResponseEntity internalError() {
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    protected ResponseEntity noContent() {
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
}
