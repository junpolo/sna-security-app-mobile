import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";
import { configureOAuthProviders } from "@features/auth/helpers/oauth-providers.helper";

configureOAuthProviders();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
