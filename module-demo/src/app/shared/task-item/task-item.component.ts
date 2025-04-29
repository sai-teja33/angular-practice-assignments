import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
