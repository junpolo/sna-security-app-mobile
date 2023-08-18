import { HttpHeaders } from "@angular/common/http";
import { endpoints } from "./constants/api-endpoints.constant";
import {
  RequestOptions,
  HttpOptions,
} from "./interfaces/http-options.interface";

export abstract class BaseApiService {
  private API_URL = "http://10.0.2.2:8080/api";

  constructor() {}

  getRequestOption({ endpoint, pathVars = {} }): RequestOptions {
    return {
      url: this.getUrl(endpoint, pathVars),
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
}
