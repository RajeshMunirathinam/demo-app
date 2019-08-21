import { MusicFiles } from './../../mocks/music.mockData';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicListComponent {

  @Input() musicFiles: MusicFiles[];

  @Output() onPlay: EventEmitter<void> = new EventEmitter<void>();

  playMusic(): void {
    this.onPlay.emit();
  }

}
