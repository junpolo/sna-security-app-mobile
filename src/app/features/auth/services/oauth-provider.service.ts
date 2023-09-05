import { Injectable } from "@angular/core";
import { ITnsOAuthTokenResult, TnsOAuthClient } from "nativescript-oauth2";

import { OAuthProviders } from "../interfaces";

@Injectable({ providedIn: "root" })
export class OAuthProviderService {
  private client: TnsOAuthClient = null;

  constructor() {}

  oAuthLogin(providerType: OAuthProviders): Promise<ITnsOAuthTokenResult> {
    if (!this.client) this.client = new TnsOAuthClient(providerType);

    return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
      this.client.loginWithCompletion(
        (tokenResult: ITnsOAuthTokenResult, error) => {
          if (error) {
            console.log(error);
            reject(error);
          }

          resolve(tokenResult);
        }
      );
    });
  }
}
