import { Component, ViewChild } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  age: number;
  course: string;
}
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AddStudentComponent,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title = 'Student Management System';
  students: Student[] = [];
  newStudent:Student|null=null;

  @ViewChild(AddStudentComponent) addStudentComponent!: AddStudentComponent;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  // This method is passed as an event to the AddStudentComponent
  addNewStudent(student: Student) {
    this.studentService.addStudent(student);
    this.students = this.studentService.getStudents(); // Refresh the list
    if (this.addStudentComponent) {
      this.addStudentComponent.clearForm();  // Call method in the child component to reset the form
    }
  }
}
