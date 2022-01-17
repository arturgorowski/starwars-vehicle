import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {StarshipsResult} from "../../_models/starships";
import {Injectable} from "@angular/core";
import {StarshipsRepositoryService} from "./starships-repository.service";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class StarshipsResolveService implements Resolve<StarshipsResult[]> {

    constructor(protected starshipsRepository: StarshipsRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StarshipsResult[]> | Promise<StarshipsResult[]> | StarshipsResult[] {
        return this.starshipsRepository.getStarships();
    }
}
