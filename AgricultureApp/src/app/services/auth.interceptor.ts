import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AgricultureService } from "./agriculture.service";

// const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private agrService: AgricultureService) { }

    intercept(
        req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method n)ot implemented.");

        //make copy of req
        let authReq = req;

        // add the jwt token
        const token = this.agrService.getToken();

        // add this token in req
        if (token != null) {
            authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }
        return next.handle(authReq);
    }
}

// This error needs to be add in providers of component
export const AuthInterceptorProviders = [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]