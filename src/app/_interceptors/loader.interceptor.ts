import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoaderService} from "../_services/loader.service";
import {finalize} from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(protected loaderService: LoaderService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoader();
        return next.handle(request).pipe(finalize(() => this.loaderService.hideLoader()));
    }
}
