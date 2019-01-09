import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './books/book/book.component';
import {BooksComponent} from './books/books.component';

const routes: Routes = [
    {path: 'books/:id', component: BookComponent},
    {
        path: 'books',
        component: BooksComponent,
        data: {title: 'Books List'}
    },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
