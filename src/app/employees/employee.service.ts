import { Injectable, ElementRef } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, of } from 'rxjs';
import { EMPLOYEES } from './mock-employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService{
    employees: Employee[];
    constructor(){}

    getEmployee(): Observable<Employee[]>{
        return of(EMPLOYEES);
    }

    addEmployee(data: Employee){
        this.employees.push(data)
    }

    editEmployee(data: ElementRef){
        // to do
        this.employees; 

    }
}