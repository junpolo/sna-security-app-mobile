import {
  ITnsOAuthTokenResult,
  TnsOAuthClient,
  configureTnsOAuth,
} from "nativescript-oauth2";
import {
  TnsOaProvider,
  TnsOaProviderOptionsFacebook,
  TnsOaProviderFacebook,
} from "nativescript-oauth2/providers";

const APP_ID = "260226016930304";
const CLIENT_SECRET = "2925820d6bea115e74be1bb58309985c";

export function configureOAuthProviders(): void {
  const facebookProvider = configureFacebookProvider();
  configureTnsOAuth([facebookProvider]);
}

function configureFacebookProvider(): TnsOaProvider {
  const options: TnsOaProviderOptionsFacebook = {
    openIdSupport: "oid-none",
    clientId: APP_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: "https://www.facebook.com/connect/login_success.html",
    scopes: ["email"],
  };

  const facebookProvider = new TnsOaProviderFacebook(options);
  return facebookProvider;
}
