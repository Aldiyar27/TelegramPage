import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'game', component: GameComponent },
  { path: 'movie', component: MovieInfoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }