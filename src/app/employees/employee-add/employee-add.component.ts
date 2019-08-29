import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.newEmployeeForm = new FormGroup({
      empId: new FormControl(null),
      username: new FormGroup({
        firstname: new FormControl(null),
        lastname: new FormControl(null)
      }),
      gender: new FormControl("male"),
      email: new FormControl(null),
      address: new FormControl(null),
      mobile: new FormControl(null),
      profilePicture: new FormControl(null)
    });
    console.log(this.newEmployeeForm);
  }
  onAddNewEmployee() {
    console.log(this.newEmployeeForm);
   alert(" Added Successfully")
    this.router.navigate(['/dashboard'])

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
