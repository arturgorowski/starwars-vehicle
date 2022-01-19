import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Starships, StarshipsResult} from "../../_models/starships";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StarshipsRepositoryService {

    private starshipsUrl = environment.swapiUrl + 'starships/';

    constructor(private http: HttpClient) {
    }

    getStarships(nextPage: string = this.starshipsUrl): Observable<StarshipsResult> {
        return this.http.get<StarshipsResult>(nextPage);
    }

    getStarshipDetails(url: string): Observable<Starships> {
        return this.http.get<Starships>(url);
    }
}
