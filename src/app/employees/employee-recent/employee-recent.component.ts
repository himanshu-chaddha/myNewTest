import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";

@Component({
  selector: "app-employee-recent",
  templateUrl: "./employee-recent.component.html",
  styleUrls: ["./employee-recent.component.css"]
})
export class EmployeeRecentComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
