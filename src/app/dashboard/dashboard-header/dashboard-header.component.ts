import { Component, OnInit } from "@angular/core";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-dashboard-header",
  templateUrl: "./dashboard-header.component.html",
  styleUrls: ["./dashboard-header.component.css"]
})
export class DashboardHeaderComponent implements OnInit {
  faHome = faHome;
  faSignOutAlt = faSignOutAlt;
  constructor() {}

  ngOnInit() {}
}
