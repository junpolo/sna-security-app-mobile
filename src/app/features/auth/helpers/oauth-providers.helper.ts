import { configureTnsOAuth } from "nativescript-oauth2";
import {
  TnsOaProvider,
  TnsOaProviderOptionsFacebook,
  TnsOaProviderFacebook,
  TnsOaProviderMicrosoft,
  TnsOaProviderOptionsMicrosoft,
} from "nativescript-oauth2/providers";

export function configureOAuthProviders(): void {
  const facebookProvider = configureFacebookProvider();
  const microsoftProvider = configureMicrosoftProvider();
  configureTnsOAuth([facebookProvider, microsoftProvider]);
}

function configureFacebookProvider(): TnsOaProvider {
  const options: TnsOaProviderOptionsFacebook = {
    openIdSupport: "oid-none",
    clientId: "260226016930304",
    clientSecret: "2925820d6bea115e74be1bb58309985c",
    redirectUri: "https://www.facebook.com/connect/login_success.html",
    scopes: ["email"],
  };

  return new TnsOaProviderFacebook(options);
}

function configureMicrosoftProvider(): TnsOaProvider {
  const options: TnsOaProviderOptionsMicrosoft = {
    openIdSupport: "oid-full",
    clientId: "ms-client-id",
    redirectUri: "ms-redirect-url",
    urlScheme: "ms-url-scheme",
    scopes: ["email"],
  };

  return new TnsOaProviderMicrosoft(options);
}
