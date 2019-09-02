import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../../employee.model";
import { EmployeeService } from "../../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit() {}
  onEmployeeSelect() {
    this.empService.employeeSelected.emit(this.employee);
    console.log("Employee Selected");
    this.router.navigate(["/employees"]);
  }
}
