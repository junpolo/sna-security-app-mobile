import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

import { AppSettingsService } from "../app-settings";

@Injectable({ providedIn: "root" })
export class HeaderInterceptorService implements HttpInterceptor {
  constructor(private appSettings: AppSettingsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addRequestHeaders(request));
  }

  private addRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.appSettings.getAccessToken();
    return request.clone({
      setHeaders: {
        from: "mobile",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  }
}
