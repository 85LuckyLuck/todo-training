import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [
	CommonModule,
	 ReactiveFormsModule,
	  RouterModule],
  	declarations: [TeamListComponent],
  	providers: [],
  	exports: [TeamListComponent] })
export class TeamListComponentModule {
}
