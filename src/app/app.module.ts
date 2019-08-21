import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicListComponent } from './shared/music-list/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    MusicListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
