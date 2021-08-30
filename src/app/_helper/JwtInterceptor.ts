import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "../_services/http/login.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.loginService.getToken();

    if (token) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.token}`,
        }
      });
    }

    return next.handle(req);
  }

}
