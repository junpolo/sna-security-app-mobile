import { Injectable } from "@angular/core";

import { AppSettingsService } from "./../app-settings/app-settings.service";
import { UserLogin } from "../../../features/auth/interfaces";

@Injectable({ providedIn: "root" })
export class AuthService extends AppSettingsService {
  private users: UserLogin[] = [
    { email: "testuser", password: "Password@123" },
  ];

  constructor() {
    super();
  }

  login(payload: UserLogin): Promise<UserLogin | void> {
    return new Promise((resolve, reject) => {
      const registeredUser = this.users.find(
        (u) => u.email === payload.email && u.password === payload.password
      );

      if (!registeredUser) reject("Unauthorized Access");

      this.isAuthenticated = registeredUser ? true : false;
      resolve(registeredUser);
    });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.isAuthenticated)
        reject("Unauthorized Access: User is not logged in");

      this.isAuthenticated = this.isAuthenticated && false;
      resolve(true);
    });
  }
}
