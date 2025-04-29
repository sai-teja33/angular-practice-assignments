import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { name: 'John Doe', age: 20, course: 'Computer Science' },
    { name: 'Jane Smith', age: 22, course: 'Mathematics' },
    { name: 'Alice Brown', age: 21, course: 'Physics' },
    { name: 'Bob White', age: 23, course: 'Chemistry' }
  ];

  constructor() { }

  getStudents() {
    return [...this.students]; // Return a copy of the students list
  }

  addStudent(student: { name: string, age: number, course: string }) {
    this.students.push(student); // Add a new student to the list
  }
}
