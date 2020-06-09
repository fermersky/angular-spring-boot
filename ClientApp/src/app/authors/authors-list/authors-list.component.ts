import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { Observable } from 'rxjs';
import { IFetchedAuthor } from 'src/app/core/interfaces';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent implements OnInit {
  authors$: Observable<IFetchedAuthor[]>;

  constructor(private authorsServie: AuthorsService) {}

  ngOnInit(): void {
    this.authors$ = this.authorsServie.get();
  }
}
