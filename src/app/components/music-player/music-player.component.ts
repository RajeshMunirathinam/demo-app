import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  musicFiles: any = [
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    },
    {
      image: '../../../assets/music-icon.png',
      name: '1',
      artist: '1A',
      duration: '1:00'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  playMusic(music: any) {}

}
