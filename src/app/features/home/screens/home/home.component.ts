import { Component, OnInit } from "@angular/core";

import { BaseComponent } from "@core/models";
import { AuthService } from "@features/auth/services";
import { DataService, DataItem } from "../../../../shared/data.service";
import { ApiService } from "@core/services/api";
import { tap } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent extends BaseComponent implements OnInit {
  items: Array<DataItem>;

  constructor(
    private _itemService: DataService,
    public authService: AuthService,
    private api: ApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.items = this._itemService.getItems();
    this.getUsers();
  }

  getUsers(): void {
    this.api.get("users").subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
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
