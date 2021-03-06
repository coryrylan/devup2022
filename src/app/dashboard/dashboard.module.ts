import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule } from '@angular/router';
import { VideoItemComponent } from './video-item/video-item.component';

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    StatFiltersComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: VideoDashboardComponent }
    ])
  ]
})
export class DashboardModule { }
