import { Injectable } from "@angular/core";
import { ApplicationSettings } from "@nativescript/core";

import { AppSettings } from "./app-settings.enum";

@Injectable({ providedIn: "root" })
export class AppSettingsService {
  constructor() {}

  get isAuthenticated(): boolean {
    return ApplicationSettings.getBoolean(AppSettings.IS_AUTHENTICATED);
  }

  set isAuthenticated(bool: boolean) {
    ApplicationSettings.setBoolean(AppSettings.IS_AUTHENTICATED, bool);
  }
}
