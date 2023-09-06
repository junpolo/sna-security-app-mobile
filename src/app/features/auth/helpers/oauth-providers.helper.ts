import { ITnsOAuthTokenResult, configureTnsOAuth } from "nativescript-oauth2";
import {
  TnsOaProvider,
  TnsOaProviderOptionsFacebook,
  TnsOaProviderFacebook,
  TnsOaProviderMicrosoft,
  TnsOaProviderOptionsMicrosoft,
  TnsOaUnsafeProviderOptions,
  TnsOaProviderOptions,
  OpenIdSupportNone,
} from "nativescript-oauth2/providers";

export interface CustomOaProviderOptions extends TnsOaUnsafeProviderOptions {}

export function configureOAuthProviders(): void {
  const facebookProvider = configureFacebookProvider();
  const microsoftProvider = configureMicrosoftProvider();
  const facebookProxyProvider = configureFacebookProxyProvider();

  configureTnsOAuth([
    facebookProvider,
    microsoftProvider,
    facebookProxyProvider,
  ]);
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

function configureFacebookProxyProvider(): TnsOaProvider {
  const options: CustomOaProviderOptions = {
    openIdSupport: "oid-none",
    clientId: "260226016930304",
    clientSecret: "",
    redirectUri: "https://www.facebook.com/connect/login_success.html",
    scopes: ["email"],
  };

  return new CustomOaProvder(options);
}

export class CustomOaProvder implements TnsOaProvider {
  options: TnsOaProviderOptions;
  openIdSupport: OpenIdSupportNone = "oid-none";
  providerType = "customProvider";
  authority = "https://www.facebook.com/v3.1/dialog";
  tokenEndpointBase = "http://localhost:7071";
  authorizeEndpoint = "/oauth";
  tokenEndpoint = "/api/securityHttpTrigger";
  cookieDomains = ["facebook.com"];

  constructor(options: CustomOaProviderOptions) {
    this.options = options;
  }

  parseTokenResult(jsonData: any): ITnsOAuthTokenResult {
    return jsonData;
  }
}
