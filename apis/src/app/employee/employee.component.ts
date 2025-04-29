import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';
import { error } from 'console';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, retry } from 'rxjs';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  employees: Employee[] = [];
  employeeForm!: FormGroup;
  isEdit = false;
  selectedID: number | null = null;
  alertMsg = '';

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      location: ['', Validators.required],
      company: ['', Validators.required]
    })
  }
  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: data => this.employees = data,
      error: err => this.alertMsg = err.message,
      complete:()=>console.log("Fetching users completed")
    })
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;
    const employeeData = this.employeeForm.value;
    if (this.isEdit && this.selectedID !== null) {
      this.employeeService.updateEmployee(employeeData).subscribe({
        next: () => {
          this.alertMsg = "Employee updated succesfully!",
            this.resetForm();
          this.loadEmployees();
        },
        error: err => this.alertMsg = err.message
      })
    } else {
      this.employeeService.addEmployee(employeeData).subscribe({
        next: () => {
          this.alertMsg = "Employee added succesfully",
            this.resetForm(),
            this.loadEmployees();
        },
        error: err => this.alertMsg = err.message
      })
    }
  }
  onEdit(employee: Employee) {
    this.isEdit = true;
    this.selectedID = employee.id;
    this.employeeForm.patchValue(employee);
  }
  onDelete(id: number) {
    if (confirm("are you sure to delete")) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.alertMsg = "Employee deleted successfully",
            this.loadEmployees();
        },
        error: err => this.alertMsg = err.message
      })
    }
  }
  onDeleteAll() {
    if (confirm("Delete all employees")) {
      this.employeeService.deleteAllEmployees().subscribe({
        next: () => {
          this.alertMsg = "all employees deleted successfully",
            this.loadEmployees();
        },
        error: err => this.alertMsg = err.message
      })
    }
  }
  resetForm() {
    this.employeeForm.reset();
    this.isEdit = false;
    this.selectedID = null;
  }
}
