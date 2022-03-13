import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecureHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const secureReq = request.clone({url: request.url.replace(/^http:\/\//i, 'https://')});

    if(request.url.includes('localhost')) return next.handle(request)
    else return next.handle(secureReq);
  }
}
