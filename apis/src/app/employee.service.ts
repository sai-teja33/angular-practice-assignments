import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private apiUrl="http://localhost:3000/employees";
  http=inject(HttpClient);

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  
  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,employee).pipe(catchError(this.handleError));
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`,employee).pipe(catchError(this.handleError));
  }

  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

deleteAllEmployees():Observable<Employee>{
  return this.http.delete<Employee>(this.apiUrl).pipe(catchError(this.handleError));
}

  private handleError(error:HttpErrorResponse){
    console.error(error.message);
    return throwError(()=>new Error("Something went wrong !"))
  }















}
