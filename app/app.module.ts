import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { routing, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';
import { Http, Headers, HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent ],
  providers: [ appRoutingProviders, SpotifyService],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
