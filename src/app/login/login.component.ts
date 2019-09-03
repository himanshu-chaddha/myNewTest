import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  loginData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      userRole: new FormControl("admin"),
      email: new FormControl(null),
      password: new FormControl(null)
    });
    this.fetch();
  }
  fetch() {
    this.http.get("http://localhost:3000/login").subscribe(
      data => {
        this.loginData = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  onLogin() {
    if (
      this.userLoginForm.value.email === this.loginData[0].email &&
      this.userLoginForm.value.password === this.loginData[0].password
    ) {
      console.log(this.loginData[0].email, "Email matched");
      this.authService.login();
      this.router.navigate(["/dashboard"]);
    } else {
      console.log("Not Matched");
    }
  }
}
