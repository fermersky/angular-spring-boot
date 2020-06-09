import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'author',
    loadChildren: () => import('./author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
})
export class AppRoutingModule {}
