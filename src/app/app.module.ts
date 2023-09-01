import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
} from "@nativescript/angular";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderInterceptorService } from "@core/services/interceptors";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptHttpClientModule, AppRoutingModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true,
    },
  ],
})
export class AppModule {}
