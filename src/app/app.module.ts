import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StarshipsComponent} from './starships/starships.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {StarshipDetailsComponent} from "./starships/starship-details/starship-details.component";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from "@angular/material/snack-bar";
import {LoaderInterceptor} from "./_interceptors/loader.interceptor";
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {StarshipComparerComponent} from "./starships/starship-comparer/starship-comparer.component";
import { ComparedItemComponent } from './starships/starship-comparer/compared-item/compared-item.component';
import {MatIconModule} from "@angular/material/icon";

const MAT_SNACK_BAR_SETTINGS: MatSnackBarConfig = {
    duration: 5000,
    verticalPosition: 'top',
};

@NgModule({
    declarations: [
        AppComponent,
        StarshipsComponent,
        StarshipDetailsComponent,
        LoaderComponent,
        StarshipComparerComponent,
        ComparedItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_SETTINGS}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
