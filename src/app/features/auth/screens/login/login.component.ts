import { Component, OnInit, inject } from "@angular/core";
import { BaseComponent } from "@core/models";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "@services";
import { UserLogin } from "../../interfaces";

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

  login(): void {
    const payload = this.loginForm.value as UserLogin;
    this.authService
      .login(payload)
      .then((result: UserLogin) => {
        this.navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
