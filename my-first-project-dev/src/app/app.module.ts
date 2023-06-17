import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloMsgComponent } from './hello-msg/hello-msg.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { TodosComponent } from './todos/todos.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { BasicComponent } from './basic-form/add-movie.component';
import { CounterMsgComponent } from './counter-msg/counter.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RxComponent } from './rx/rx.component';
import { HttpClientModule } from '@angular/common/http';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { SearchComponent } from './search/search.component';
import { ReceipeCardComponent } from './receipe-card/receipe-card.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'receipes', component: MovieListComponent },
  // { path: 'movies', component: MovieListComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'movies/add', component: AddMovieComponent },
  // { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'receipes/:id', component: MovieDetailsComponent },
  { path: 'receipes/edit/:id', component: EditMovieComponent },
  // { path: 'movies/edit/:id', component: EditMovieComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloMsgComponent,
    UserComponent,
    CounterComponent,
    ColorGameComponent,
    ColorBoxComponent,
    TodosComponent,
    MovieCardComponent,
    MovieListComponent,
    PipesComponent,
    BasicComponent,
    AddMovieComponent,
    CounterMsgComponent,
    HomeComponent,
    NotFoundComponent,
    RxComponent,
    StockTrackerComponent,
    MovieDetailsComponent,
    EditMovieComponent,
    SearchComponent,
    ReceipeCardComponent,
    
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
