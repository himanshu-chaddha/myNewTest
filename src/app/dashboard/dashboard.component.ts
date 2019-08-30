import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faEye } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  faEye = faEye;
  constructor(private router: Router) {}

  ngOnInit() {}
}
