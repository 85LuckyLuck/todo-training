import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TeamListComponent],
  	providers: [],
  	exports: [TeamListComponent] })
export class TeamListComponentModule {
}
