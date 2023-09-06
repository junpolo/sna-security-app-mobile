import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";
import { configureOAuthProviders } from "@features/auth/helpers/oauth-providers.helper";

require("nativescript-localstorage");

configureOAuthProviders();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
