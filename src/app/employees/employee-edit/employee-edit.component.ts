import { Component, OnInit } from "@angular/core";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-employee-edit",
  templateUrl: "./employee-edit.component.html",
  styleUrls: ["./employee-edit.component.css"]
})
export class EmployeeEditComponent implements OnInit {
  faSave = faSave;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  onEditEmployeeData() {
    console.log("Edit Success");
    this.router.navigate(["/employee-detail"]);
  }
}
