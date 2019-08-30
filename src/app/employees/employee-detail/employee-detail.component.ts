import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  faUserEdit = faUserEdit;
  constructor(private router: Router) {}

  ngOnInit() {}
  onEditEmployee() {
    this.router.navigate(["/employee-edit"]);
  }
}
