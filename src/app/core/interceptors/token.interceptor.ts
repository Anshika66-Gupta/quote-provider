import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        const tokenized = req.clone({
            setHeaders:{Authorization:'Bearer dummy token'}
        });
        return next.handle(tokenized);
    }
}