import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,FormsModule,SharedModule
  ],
  exports:[TaskListComponent]
})
export class FeatureModule { }
