import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../_services/loader.service";
import {delay} from "rxjs/operators";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    isLoading: boolean;
    constructor(protected loaderService: LoaderService) {
    }

    ngOnInit(): void {
        this.castLoader();
    }

    castLoader() {
        this.loaderService.cast
            .pipe(delay(0))
            .subscribe((response: boolean) => this.isLoading = response)
    }

}
