import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  faUserPlus = faUserPlus;
  public imagePath;
  imgURL: any = "";
  public message: string;

  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }
  onAddEmployee() {
    this.router.navigate(["/employee-add"]);
    console.log(this.employees);
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }
}
