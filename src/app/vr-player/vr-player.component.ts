import { Component, Input } from '@angular/core';

@Component({
  selector: 'vr-player',
  templateUrl: './vr-player.component.html',
  styleUrls: ['./vr-player.component.scss'],
})
export class VrPlayerComponent {
  @Input() video: Object;
  player: YT.Player;

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
}
