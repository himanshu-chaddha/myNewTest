import { Component, OnInit } from "@angular/core";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../shared/auth.service";
@Component({
  selector: "app-dashboard-header",
  templateUrl: "./dashboard-header.component.html",
  styleUrls: ["./dashboard-header.component.css"]
})
export class DashboardHeaderComponent implements OnInit {
  faHome = faHome;
  faSignOutAlt = faSignOutAlt;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  logout() {
    this.authService.logout();
  }
}
