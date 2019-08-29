import { Component, OnInit } from "@angular/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-dashboard-footer",
  templateUrl: "./dashboard-footer.component.html",
  styleUrls: ["./dashboard-footer.component.css"]
})
export class DashboardFooterComponent implements OnInit {
  faHeart = faHeart;
  constructor() {}

  ngOnInit() {}
}
