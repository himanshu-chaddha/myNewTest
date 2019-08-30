import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Employee } from "../employee.model";
import { EmployeeService } from "../employee.service";
import { EMPLOYEES } from "../mock-employee";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  selectedEmployee: Employee;
  employees = EMPLOYEES;
  faUserPlus = faUserPlus;

  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit() {
    // this.getEmployee();
  }
  onAddEmployee() {
    this.router.navigate(["/employee-add"]);
    console.log(this.employees);
  }
  onEmployeeSelect(employee: Employee) {
    this.selectedEmployee = employee;
    this.router.navigate(["/employee-detail"]);
    console.log("Selected", this.selectedEmployee);
  }
  // getEmployee(){
  //   this.employees = this.empService.getEmployee();
  // }
}
