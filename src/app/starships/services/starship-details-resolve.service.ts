import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Starships} from "../../_models/starships";
import {Injectable} from "@angular/core";
import {StarshipsRepositoryService} from "./starships-repository.service";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class StarshipDetailsResolveService implements Resolve<Starships> {

    constructor(protected starshipsRepository: StarshipsRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Starships> | Promise<Starships> | Starships {
        return this.starshipsRepository.getStarshipDetails(route.queryParams.url);
    }
}
