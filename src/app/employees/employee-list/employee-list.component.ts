import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  faUserPlus = faUserPlus;
  constructor(private router: Router) {}

  ngOnInit() {}
  onAddEmployee() {
    this.router.navigate(["/employee-add"]);
  }
}
