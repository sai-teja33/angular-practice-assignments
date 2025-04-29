import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Input() existingStudent: { name: string, age: number, course: string } | null = null;
  @Output() studentAdded = new EventEmitter<{ name: string, age: number, course: string }>();

  name: string = '';
  age: number = 0;
  course: string = '';

  ngOnChanges() {
    if (this.existingStudent) {
      this.name = this.existingStudent.name;
      this.age = this.existingStudent.age;
      this.course = this.existingStudent.course;
    }
  }

  addStudent() {
    const student = { name: this.name, age: this.age, course: this.course };
    this.studentAdded.emit(student);
    
  }

  clearForm() {
    this.name = '';
    this.age = 0;
    this.course = '';
  }
}
