import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'vrplayer',
  templateUrl: './vrplayer.component.html',
  styleUrls: ['./vrplayer.component.scss'],
})
export class VrPlayerComponent implements OnChanges {
  @Input() url: string;
  player: YT.Player;

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

  ngOnChanges(changes) {
    if (this.player) {
      this.player.loadVideoById(changes.url.currentValue);
    }
  }
}
