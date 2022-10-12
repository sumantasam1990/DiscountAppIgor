import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentAuthToken = this.auth.currentAuthTokenValue();
        if (currentAuthToken && currentAuthToken) {
            const headers = {
                'Authorization': `Bearer ${currentAuthToken}`,
            };
            if (request.responseType === 'json') {
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            request = request.clone({
                setHeaders: headers
            });
        }

        return next.handle(request);
    }
}
