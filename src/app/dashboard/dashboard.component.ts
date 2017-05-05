import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../shared/mock-videos';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  videos: Object[];
  selectedVideo: Object;

  constructor() {
    this.videos = VIDEOS;
    this.selectedVideo = VIDEOS[0];
  }

  ngOnInit() {

  }

  loadVideo(video: Object) {
    this.selectedVideo = video;
  }
}
