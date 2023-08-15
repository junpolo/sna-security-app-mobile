import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { LoginComponent } from "./screens/login/login.component";

export const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
