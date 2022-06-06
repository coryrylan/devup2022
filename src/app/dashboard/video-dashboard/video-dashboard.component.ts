import { Component } from '@angular/core';
import {Video} from "../types";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent {
  videos = videoList;
  selectedVideo: Video | undefined;

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}

const videoList: Video[] = [
  {
    "title": "Tips from Angular Book Camp instructors",
    "author": "Kyle Cordes, Lance Finney, Zachary Kipping, and David Moore",
    "id": "JINJQk7ggoo",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2021-0-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-25"
      }
    ]
  },
  {
    "title": "RxJS, the easy way to write correct Angular applications",
    "author": "Chris Hardin",
    "id": "DAGrVyKR_P4",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  },
  {
    "title": "The Dangerous Temptation of Customizing Angular Material",
    "author": "Paul Spears",
    "id": "gSvxYv2VgHc",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  },
  {
    "title": "NgRx Efficiency with Entity",
    "author": "Lance Finney",
    "id": "2I-MPIOBJLQ",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2021-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2021-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2021-0-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2021-08-25"
      }
    ]
  },
  {
    "title": "RxJS variable names or names$, a raging debate",
    "author": "Oasis Digital Developers",
    "id": "ynjQ5V7XiR4",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2021-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2021-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2021-03-25"
      }
    ]
  }
];
