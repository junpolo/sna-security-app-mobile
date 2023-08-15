import { Injectable, Injector, inject } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

import { NavExtras } from "@core/interfaces";

@Injectable()
export abstract class BaseComponent {
  page: Page = inject(Page);
  routerExtensions: RouterExtensions = inject(RouterExtensions);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  navExtras: NavExtras;

  constructor() {
    this.navExtras = {
      queryParams: {},
      replaceUrl: false,
      animated: true,
      transition: { name: "slide" },
    };
  }

  navigate(path: string, options: NavExtras = {}): void {
    this.routerExtensions.navigate([path], {
      ...this.navExtras,
      ...{ relativeTo: this.activatedRoute },
      ...options,
    });
  }
}
