import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { KeycloakService } from './keycloak.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private keycloakService: KeycloakService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return from(Promise.resolve(this.keycloakService.getToken())).pipe(
            switchMap((token) => {
                if (token) {
                    const authReq = req.clone({
                        setHeaders: { Authorization: `Bearer ${token}` },
                    });
                    return next.handle(authReq);
                }
                return next.handle(req);
            })
        );
    }
}
