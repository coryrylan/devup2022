import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from "../types";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  selectVideo(video: Video) {
    this.videoSelected.emit(video);
  }
}
