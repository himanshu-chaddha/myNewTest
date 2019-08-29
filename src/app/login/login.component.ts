import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }
  onLogin() {
    console.log("User Logged In");
    console.log(this.userLoginForm);
    this.router.navigate(["/dashboard"]);
  }
}
