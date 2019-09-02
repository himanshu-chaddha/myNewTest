import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";
import { faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  faUserEdit = faUserEdit;
  faUserPlus = faUserPlus;
  selectedEmployee: Employee;
  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.empService.employeeSelected.subscribe((employee: Employee) => {
      this.selectedEmployee = employee;
    });
  }
}
