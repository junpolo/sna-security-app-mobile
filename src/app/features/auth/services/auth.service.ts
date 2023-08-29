import { Injectable } from "@angular/core";

import { AppSettingsService } from "@core/services/app-settings";
import { ApiService } from "@core/services/api";
import { User } from "../interfaces";
import { Observable, catchError, lastValueFrom, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService extends AppSettingsService {
  private users: User[] = [{ email: "testuser", password: "Password@123" }];

  constructor(private api: ApiService) {
    super();
  }

  async login(user: User): Promise<User | void> {
    this.isAuthenticated = false;
    try {
      const validUser = await lastValueFrom(
        this.api.post("login", { ...user })
      );
      if (validUser) {
        this.isAuthenticated = true;
        return validUser;
      }

      this.isAuthenticated = false;
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

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.isAuthenticated)
        reject("Unauthorized Access: User is not logged in");

      this.isAuthenticated = this.isAuthenticated && false;
      resolve(true);
    });
  }
}
