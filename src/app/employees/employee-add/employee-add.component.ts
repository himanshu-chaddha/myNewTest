import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";
@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"]
})
export class EmployeeAddComponent implements OnInit {
  faUserPlus = faUserPlus;
  newEmployeeForm: FormGroup;
  public imagePath;
  imgURL: any = "";
  public message: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.newEmployeeForm = new FormGroup({
      id: new FormControl(null),
      username: new FormGroup({
        firstName: new FormControl(null),
        lastName: new FormControl(null)
      }),
      gender: new FormControl("male"),
      email: new FormControl(null),
      address: new FormControl(null),
      mobile: new FormControl(null),
      imagePath: new FormControl(null)
    });
  }
  onAddNewEmployee(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    imagePath: string,
    gender: string,
    address: string,
    mobile: number
  ) {
    console.log(this.newEmployeeForm);

    this.employeeService.addEmployee(
      id,
      email,
      firstName,
      lastName,
      imagePath,
      gender,
      address,
      mobile
    );

    this.employeeService.getEmployees();
    this.router.navigate(["/dashboard"]);
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
