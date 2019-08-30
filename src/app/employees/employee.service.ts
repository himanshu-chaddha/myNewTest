import { Injectable, ElementRef } from "@angular/core";
import { Employee } from "./employee.model";
import { Observable, of } from "rxjs";
import { EMPLOYEES } from "./mock-employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  totalEmployees = 0;
  employees: Employee[];
  constructor() {}

  getEmployee(): Observable<Employee[]> {
    let a = [1, 2, 3];
    return of(EMPLOYEES);
  }

  addEmployee(data: Employee) {
    this.employees.push(data);
  }

  editEmployee(data: ElementRef) {
    // to do
    this.employees;
  }
}
