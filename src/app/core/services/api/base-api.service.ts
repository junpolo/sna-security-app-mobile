import { HttpHeaders, HttpParams } from "@angular/common/http";
import { RequestOptions } from "./interfaces/http-options.interface";

export abstract class BaseApiService {
  private API_URL = "http://10.0.2.2:8080/api";

  constructor() {}

  getRequestOption({ endpoint, pathVars = {}, params = {} }): RequestOptions {
    return {
      url: this.getUrl(endpoint, pathVars),
      params: this.getParams(params),
      headers: this.getHeaders(),
    };
  }

  getUrl(endpoint: string, pathVars: object = {}): string {
    const urls = [this.API_URL, endpoint];

    let url = urls.join("/");

    Object.entries(pathVars).forEach((entry) => {
      const [key, value] = entry;
      url = url.replace(`{${key}}`, value);
    });

    return url;
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return headers;
  }

  getParams(p: any = {}): HttpParams {
    let params = new HttpParams();

    Object.entries(p).forEach((entry: any) => {
      const [key, value] = entry;
      params = params.set(key, value);
    });

    return params;
  }
}
