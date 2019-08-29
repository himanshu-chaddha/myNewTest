import { Component, OnInit } from "@angular/core";
import {
  faTachometerAlt,
  faList,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-dashboard-side-bar",
  templateUrl: "./dashboard-side-bar.component.html",
  styleUrls: ["./dashboard-side-bar.component.css"]
})
export class DashboardSideBarComponent implements OnInit {
  faTachometerAlt = faTachometerAlt;
  faList = faList;
  faUserPlus = faUserPlus;
  constructor() {}

  ngOnInit() {}
}
