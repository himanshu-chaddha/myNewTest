import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  login() {
    localStorage.setItem("key", "value");
  }
  loggedin() {
    return !!localStorage.getItem("key");
  }
  logout() {
    localStorage.removeItem("key");
  }
}
