import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { EmployeeAddComponent } from "./employees/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";
import { EmployeeEditComponent } from "./employees/employee-edit/employee-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DashboardHeaderComponent } from "./dashboard/dashboard-header/dashboard-header.component";
import { DashboardFooterComponent } from "./dashboard/dashboard-footer/dashboard-footer.component";
import { DashboardSideBarComponent } from "./dashboard/dashboard-side-bar/dashboard-side-bar.component";
import { EmployeeRecentComponent } from "./employees/employee-recent/employee-recent.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    PageNotFoundComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSideBarComponent,
    EmployeeRecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
