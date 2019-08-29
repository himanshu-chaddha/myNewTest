import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { EmployeeAddComponent } from "./employees/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";
import { EmployeeEditComponent } from "./employees/employee-edit/employee-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "employee-add", component: EmployeeAddComponent },
  { path: "employee-detail", component: EmployeeDetailComponent },
  { path: "employee-edit", component: EmployeeEditComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
