import { Injectable } from "@angular/core";
import { AppSettingsService } from "@core/services/app-settings";
import { ApiService } from "@core/services/api";
import { lastValueFrom } from "rxjs";
import { ITnsOAuthTokenResult } from "nativescript-oauth2";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Auth0 } from "nativescript-auth0";

import { OAuthProviders, User, UserLoginResponse } from "../interfaces";
import { OAuthProviderService } from "./oauth-provider.service";

@Injectable({ providedIn: "root" })
export class AuthService extends AppSettingsService {
  private auth0Client: Auth0;

  constructor(
    private api: ApiService,
    private oAuthService: OAuthProviderService,
    private http: HttpClient
  ) {
    super();

    const clientId = "xfgAkqZBin0Pnn2gMFFgFbnOFYOkdmDq";
    const domain = "sna-security-app.us.auth0.com";
    this.auth0Client = new Auth0(clientId, domain);
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

  oAuthLogin(providerType: keyof typeof OAuthProviders): Promise<any> {
    const provider = OAuthProviders[providerType];

    return this.oAuthService
      .oAuthLogin(provider)
      .then((response: ITnsOAuthTokenResult) => {
        this.setAccessToken(response.accessToken);
        this.setExpiration(Number(response.accessTokenExpiration));

        if (providerType === "FACEBOOK") this.getFacebookUsername();
      });
  }

  getFacebookUsername(): void {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get("https://graph.facebook.com/v3.2/me?fields=name", { headers })
      .subscribe((response: { name: string }) => {
        console.log(response.name);
      });
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
