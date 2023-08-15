import { Component, OnInit, inject } from "@angular/core";
import { BaseComponent } from "@core/models";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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

  constructor() {
    super();
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {}

  login(): void {
    console.log(this.loginForm.value);
  }
}
