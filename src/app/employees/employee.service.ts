import { Employee } from "./employee.model";
import { EventEmitter } from "@angular/core";

export class EmployeeService {
  employeeSelected = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee(
      1,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      2,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      3,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      4,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      5,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      6,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      7,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      8,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      9,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    ),
    new Employee(
      10,
      "abc@test.com",
      "Jack",
      "Cyro",
      "../../assets/images/Default-profile.jpg",
      "male",
      "Test Address",
      9999999999
    )
  ];
  totalEmployees = this.employees.length;
  totalActiveEmployees = this.employees.length;
  totalDeletedEmployees = this.totalEmployees - this.totalActiveEmployees;

  constructor() {}

  addEmployee(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    imagePath: string,
    gender: string,
    address: string,
    mobile: number
  ) {
    const newEmp = {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      imagePath: imagePath,
      gender: gender,
      address: address,
      mobile: mobile
    };
    this.employees.push(newEmp);
  }

  editEmployeeData(id: number, mobile: number) {
    this.employees[id].mobile = mobile;
  }

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(id: number) {
    return this.employees[id];
  }
}
