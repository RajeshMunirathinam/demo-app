import { Component, OnInit } from '@angular/core';
import { MusicFiles, musicFiles } from '../../mocks/music.mockData';
import * as _ from 'lodash';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  musicFiles: MusicFiles[] = [];

  ngOnInit() {
    this.getMultipleData(musicFiles);
  }

  playMusic(): void {
    console.log('Playing Music....');
  }

  getMultipleData(music: MusicFiles[]): void {
    _.forEach(_.range(10), () => {
      this.musicFiles = _.concat(this.musicFiles, music);
    });
  }

}
