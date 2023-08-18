import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface HttpOptions {
  pathVars?: { [key: string]: string | number };
  params?: { [key: string]: string | boolean | number };
  headers?: { [key: string]: string | boolean | number };
}

export interface RequestOptions {
  url: string;
  params?: HttpParams;
  headers?: HttpHeaders;
}
