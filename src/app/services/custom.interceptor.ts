import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
token:any;
Headers:any;
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem("loginToken");
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${this.token}` }
  });
    return next.handle(request);
  }
}
