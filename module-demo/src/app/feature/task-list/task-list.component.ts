import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];  // To hold the list of tasks
  newTask = '';  // Bind to the input for adding a new task

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();  // Load tasks when component initializes
  }

  // Method to load tasks from the service
  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  // Method to add a task
  addTask() {
    if (this.newTask.trim()) {
      const task = { title: this.newTask.trim(), completed: false };
      this.taskService.addTask(task).subscribe(newTask => {
        this.tasks.push(newTask);  // Add the new task to the list
        this.newTask = '';  // Reset the input field
      });
    }
  }

  // Method to delete a task
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);  // Remove the deleted task from the list
    });
  }
}
