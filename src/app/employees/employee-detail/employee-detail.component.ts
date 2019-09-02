import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";
@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;
  faUserEdit = faUserEdit;
  public imagePath;
  imgURL: any = "";
  public message: string;

  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit() {}

  onEditEmployee() {
    this.router.navigate(["/employee-edit"]);
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
