import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { EmployeeService } from "../employees/employee.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  faEye = faEye;
  totalEmp: number;
  currentEmp: number;
  deletedEmp: number;
  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit() {
    this.totalEmp = this.empService.totalEmployees;
    this.currentEmp = this.empService.totalActiveEmployees;
    this.deletedEmp = this.empService.totalDeletedEmployees;
    console.log("total emp", this.totalEmp);
  }
  onViewMore() {
    this.router.navigate(["/employee-list"]);
  }
}
