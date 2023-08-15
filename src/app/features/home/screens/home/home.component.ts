import { Component, OnInit } from "@angular/core";

import { BaseComponent } from "@core/models";
import { AuthService } from "@features/auth/services/auth.service";
import { DataService, DataItem } from "../../../../shared/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent extends BaseComponent implements OnInit {
  items: Array<DataItem>;

  constructor(
    private _itemService: DataService,
    public authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.items = this._itemService.getItems();
  }

  logout(): void {
    this.authService.logout().then(() =>
      this.navigate("/login", {
        transition: { name: "slideRight" },
        clearHistory: true,
      })
    );
  }
}
