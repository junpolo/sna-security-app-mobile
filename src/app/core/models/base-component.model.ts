import { Injectable, Injector, inject } from "@angular/core";
import { Page } from "@nativescript/core";

@Injectable()
export abstract class BaseComponent {
  page: Page = inject(Page);

  constructor() {}
}
