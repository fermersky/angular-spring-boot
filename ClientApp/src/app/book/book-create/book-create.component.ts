import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BooksService } from 'src/app/core/services/books.service';
import { FilesService } from 'src/app/core/services/files.service';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { Observable } from 'rxjs';
import { IFetchedAuthor, IFetchedFile, IBookDto, IFetchedBook } from 'src/app/core/interfaces';
import { ImagesService } from 'src/app/core/services/images.service';

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
  authorId: FormControl;

  fileToUpload: File = null;
  imageToUpload: File = null;

  createBookForm: FormGroup;

  authors$: Observable<IFetchedAuthor[]>;
  uploadingResults: IFetchedFile[];

  constructor(
    private authorsService: AuthorsService,
    private imagesService: ImagesService,
    private booksService: BooksService,
    private filesService: FilesService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeControls();
    this.initializeGroup();

    this.authors$ = this.fetchAuthors();
  }

  onFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
  onImageInput(files: FileList): void {
    this.imageToUpload = files.item(0);
  }

  async onFormSubmit() {
    if (!this.formValid()) {
      this.snackBar.open('Form validation failed', 'Got it');
      this.createBookForm.updateValueAndValidity();

      return;
    }

    try {
      this.uploadingResults = await Promise.all([
        this.uploadFile(this.fileToUpload),
        this.uploadImage(this.imageToUpload),
      ]);

      const bookDto = this.getBookDtoFromControls();
      const result: IFetchedBook = await this.booksService.post(bookDto).toPromise();

      this.router.navigate(['book/details/' + result.id]);
      this.snackBar.open('Book was successfully created!', 'Great!');
    } catch (err) {
      this.snackBar.open('An error occurred due creation of book', 'Got it');
    }
  }

  private async uploadFile(file: File): Promise<IFetchedFile> {
    return this.filesService.upload(file).toPromise();
  }

  private async uploadImage(file: File): Promise<IFetchedFile> {
    return this.imagesService.upload(file).toPromise();
  }

  private getBookDtoFromControls(): IBookDto {
    return {
      title: this.createBookForm.get('title').value,
      authorId: this.createBookForm.get('authorId').value,
      genre: this.createBookForm.get('genre').value,
      description: this.createBookForm.get('description').value,
      year: this.createBookForm.get('year').value,
      filename: this.uploadingResults[0].filename,
      imageId: this.uploadingResults[1].id,
    };
  }

  private fetchAuthors(): Observable<IFetchedAuthor[]> {
    return this.authorsService.get(false);
  }

  private formValid(): boolean {
    const filesSelected: boolean = this.fileToUpload && this.imageToUpload ? true : false;
    const formValid: boolean = this.createBookForm.valid;

    return filesSelected && formValid;
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

    this.authorId = this.fb.control('', Validators.required);
  }

  private initializeGroup(): void {
    this.createBookForm = this.fb.group({
      title: this.title,
      genre: this.genre,
      description: this.description,
      year: this.year,
      authorId: this.authorId,
    });
  }
}
