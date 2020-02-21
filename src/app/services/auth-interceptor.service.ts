import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {

        // console.log('environment' + ': ' + environment.production);
        // console.log('environment api url' + ': ' + environment.apiUrl);
        // if(req.url.startsWith('/api') && environment.production){
        //   const apiUrl = 'http://game-tracker-server.herokuapp.com';
        //   req = req.clone({
        //           url: apiUrl + req.url,
        //   });
        // }

        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = 
          req.clone(
            {
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': `Bearer  ${user.access_token}`
              })
            }
          );
        return next.handle(modifiedReq);
      })
    );
  }
}
