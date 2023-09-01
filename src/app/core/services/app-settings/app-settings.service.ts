import { Injectable } from "@angular/core";
import { ApplicationSettings } from "@nativescript/core";

import { AppSettings } from "./app-settings.enum";

@Injectable({ providedIn: "root" })
export class AppSettingsService {
  constructor() {}

  get isAuthenticated(): boolean {
    const expires = this.getExpiration();

    if (!expires) return false;

    return new Date().getTime() < expires;
  }

  setAccessToken(accessToken: string): void {
    ApplicationSettings.setString(AppSettings.ACCESS_TOKEN, accessToken);
  }

  getAccessToken(): string {
    return ApplicationSettings.getString(AppSettings.ACCESS_TOKEN);
  }

  setExpiration(time: number): void {
    ApplicationSettings.setNumber(AppSettings.EXPIRATION_KEY, time * 1000);
  }

  getExpiration(): number {
    return ApplicationSettings.getNumber(AppSettings.EXPIRATION_KEY);
  }
}
