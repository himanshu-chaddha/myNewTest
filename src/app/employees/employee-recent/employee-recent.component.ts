import { Component, OnInit } from '@angular/core';
import {EMPLOYEES} from '../mock-employee';
@Component({
  selector: 'app-employee-recent',
  templateUrl: './employee-recent.component.html',
  styleUrls: ['./employee-recent.component.css']
})
export class EmployeeRecentComponent implements OnInit {
  employees= EMPLOYEES;
  constructor() { }

  ngOnInit() {
  }

}
