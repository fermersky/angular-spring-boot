import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImagesService } from 'src/app/core/services/images.service';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css'],
})
export class CreateAuthorComponent implements OnInit {
  createAuthorForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;

  imageToUpload: File;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private imagesService: ImagesService,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.initializeControls();
    this.intiazlieGroup();
  }

  async onFormSubmit() {
    if (!this.formValid()) {
      this.snackBar.open('Form validation failed');
      return;
    }

    try {
      const imageUploadResult = await this.imagesService.upload(this.imageToUpload).toPromise();

      const firstnameVal = this.createAuthorForm.get('firstname').value;
      const lastnameVal = this.createAuthorForm.get('lastname').value;

      const authorCreationResult = await this.authorsService
        .post(firstnameVal, lastnameVal, imageUploadResult.id)
        .toPromise();

      this.router.navigate(['/account/panel']);
    } catch (err) {
      console.log(err);
      this.snackBar.open('An error occurred due creation of author', 'Got it!');
    }
  }

  onImageInput(files: FileList) {
    this.imageToUpload = files.item(0);
  }

  private formValid(): boolean {
    if (this.createAuthorForm.valid && this.imageToUpload) {
      return true;
    }

    return false;
  }

  private initializeControls() {
    this.firstname = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);

    this.lastname = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
  }

  private intiazlieGroup() {
    this.createAuthorForm = this.fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
    });
  }
}
