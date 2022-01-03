import {
    HttpClient,
    HttpRequest,
    HttpEventType,
    HttpResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { catchError } from "rxjs/internal/operators/catchError";
  import { Observable, ObservableInput, throwError } from "rxjs";
  import { Subject } from "rxjs";
  import { map } from "rxjs/operators";
  import { HttpParams } from "@angular/common/http";
@Injectable({
    providedIn: "root"
  })
export class UserService {
    handleError!: (err: any, caught: Observable<Object>) => ObservableInput<any>;
constructor(public http: HttpClient) { }

  //To perform httpClient get request
  httpGetRequest(headers?:any, paramObj?:any) {
    const response = this.http
      .get("http://localhost:8080/api/getall", {
        headers: headers,
        params: paramObj
      })
      .pipe(catchError(this.handleError));
    return response;
  }
}