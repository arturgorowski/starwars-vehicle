import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    cast: Observable<boolean> = this.isLoading.asObservable();

    showLoader(): void {
        this.isLoading.next(true);
    }

    hideLoader(): void {
        this.isLoading.next(false);
    }
}
