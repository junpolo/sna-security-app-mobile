import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { BaseApiService } from "./base-api.service";
import { HttpOptions } from "./interfaces/http-options.interface";

@Injectable({ providedIn: "root" })
export class ApiService extends BaseApiService {
  constructor(protected http: HttpClient) {
    super();
  }

  get = (endpoint: string, options: HttpOptions = {}): Observable<any> => {
    const { url, params, headers } = this.getRequestOption({
      endpoint,
      ...options,
    });
    return this.http.get(url, { headers, params });
  };

  post = <T>(
    endpoint: string,
    data: T,
    options: HttpOptions = {}
  ): Observable<any> => {
    const { url, params, headers } = this.getRequestOption({
      endpoint,
      ...options,
    });

    const reqOptions = { params, headers };

    return this.http.post(url, data, reqOptions);
  };
}
