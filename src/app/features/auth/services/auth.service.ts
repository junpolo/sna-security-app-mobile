import { Injectable } from "@angular/core";

import { AppSettingsService } from "@core/services/app-settings";
import { ApiService } from "@core/services/api";
import { User, UserLoginResponse } from "../interfaces";
import { Observable, catchError, lastValueFrom, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService extends AppSettingsService {
  constructor(private api: ApiService) {
    super();
  }

  async login(user: User): Promise<UserLoginResponse | void> {
    try {
      const validUser: UserLoginResponse = await lastValueFrom(
        this.api.post("login", { ...user })
      );
      if (validUser) {
        this.setAccessToken(validUser.accessToken);
        this.setExpiration(Number(validUser.expires));

        return validUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async register(user: User): Promise<any> {
    try {
      return await lastValueFrom(this.api.post("register", { ...user }));
    } catch (error) {
      throw error;
    }
  }

  oAuthLogin(): Promise<any> {
    return Promise.resolve({ accessToken: "LOGINTEST" });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.isAuthenticated)
        reject("Unauthorized Access: User is not logged in");

      this.setAccessToken("");
      this.setExpiration(0);
      resolve(true);
    });
  }
}
