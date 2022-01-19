import {BehaviorSubject, Observable} from "rxjs";
import {Starships} from "../_models/starships";
import {StarshipStorage} from "../_helpers/starship-storage";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class StarshipService {

    private starships: BehaviorSubject<Starships[]> = new BehaviorSubject<Starships[]>([]);
    cast$: Observable<Starships[]> = this.starships.asObservable();

    constructor() {
        this.loadStarships();
    }

    private loadStarships() {
        const starships: Starships[] = StarshipStorage.getStarships();
        if (starships.length) {
            this.starships.next(starships);
        }
    }

    addStarship(starships: Starships): void {
        StarshipStorage.addStarship(starships);
        this.starships.next(StarshipStorage.getStarships());
    }

    removeStarship(starships: Starships): void {
        StarshipStorage.removeStarship(starships);
        this.starships.next(StarshipStorage.getStarships());
    }

    removeAllStarship() {
        StarshipStorage.clearData();
        this.starships.next(StarshipStorage.getStarships());
    }

}
