import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  faUserShield = faUserShield;
  constructor(private router: Router) {}

  ngOnInit() {}
  onLoginClick() {
    this.router.navigate(["/login"]);
  }
}
