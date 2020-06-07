import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { BooksService } from 'src/app/core/services/books.service';
import { FilesService } from 'src/app/core/services/files.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {
  title: FormControl;
  genre: FormControl;
  description: FormControl;
  year: FormControl;
  authorFirstName: FormControl;
  authorLastName: FormControl;
  authorId: FormControl;

  // complex fields
  file: FormControl;
  image: FormControl;

  createBookForm: FormGroup;

  disableSelect = false;

  constructor(
    private booksService: BooksService,
    private filesService: FilesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeControls();
    this.initializeGroup();
  }

  onSelectionChange(value: string) {
    const fnControl = this.createBookForm.get('authorFirstName');
    const lnControl = this.createBookForm.get('authorLastName');

    if (value) {
      fnControl.setValue('');
      lnControl.setValue('');

      fnControl.clearValidators();
      lnControl.clearValidators();
    } else {
      fnControl.setValidators(this.getAuthorNameValidators());
      lnControl.setValidators(this.getAuthorNameValidators());
    }

    fnControl.updateValueAndValidity();
    lnControl.updateValueAndValidity();
  }

  private initializeControls(): void {
    this.title = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]);

    this.genre = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);

    this.description = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(1000),
    ]);

    this.year = this.fb.control('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(4),
    ]);

    this.authorId = this.fb.control('');
    this.authorFirstName = this.fb.control('', this.getAuthorNameValidators());
    this.authorLastName = this.fb.control('', this.getAuthorNameValidators());
  }

  private getAuthorNameValidators(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(3), Validators.maxLength(30)];
  }

  private initializeGroup(): void {
    this.createBookForm = this.fb.group({
      title: this.title,
      genre: this.genre,
      description: this.description,
      year: this.year,
      authorId: this.authorId,
      authorFirstName: this.authorFirstName,
      authorLastName: this.authorLastName,
    });
  }
}
