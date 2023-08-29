import { Component, OnInit, inject } from "@angular/core";
import { BaseComponent } from "@core/models";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../services";
import { User } from "../../interfaces";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(private authService: AuthService) {
    super();
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.navigate("/home");
    }
  }

  register(): void {
    const payload = this.loginForm.value as User;

    this.authService
      .register(payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(): void {
    const payload = this.loginForm.value as User;
    this.authService
      .login(payload)
      .then((result: User) => {
        this.navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
