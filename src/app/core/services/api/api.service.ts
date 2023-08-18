import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { BaseApiService } from "./base-api.service";
import { HttpOptions } from "./interfaces/http-options.interface";
import { endpoints } from "./constants/api-endpoints.constant";

@Injectable({ providedIn: "root" })
export class ApiService extends BaseApiService {
  constructor(protected http: HttpClient) {
    super();
  }

  get = (endpoint: string, options: HttpOptions = {}): Observable<any> => {
    const { url, headers } = this.getRequestOption({ endpoint, ...options });
    return this.http.get(url, { headers });
  };
}
