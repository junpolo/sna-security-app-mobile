import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@core/models";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}
