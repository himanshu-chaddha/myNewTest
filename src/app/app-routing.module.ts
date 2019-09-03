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
import { EmployeesComponent } from "./employees/employees.component";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
   },

  { path: "employee-add", component: EmployeeAddComponent },

  {
    path: "employees/employee-list",
    component: EmployeesComponent,
    children: [
      {
        path: "employee-list",
        component: EmployeeListComponent,
        children: [
          { path: "employee-edit", component: EmployeeEditComponent },
          { path: "employee-detail", component: EmployeeDetailComponent }
        ]
      },
      { path: "employee-add", component: EmployeeAddComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
