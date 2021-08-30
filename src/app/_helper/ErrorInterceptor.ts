import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {LoginService} from "../_services/http/login.service";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err => {

      if (err.error.message === 'account_is_disabled') {

        return throwError(err);
      }

      if (err.status === 401) {

        this.loginService.logout();
        //location.reload(true);
      }

      return throwError(err);
    }));
  }
}
