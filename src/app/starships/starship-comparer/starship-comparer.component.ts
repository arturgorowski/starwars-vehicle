import {Component, OnDestroy, OnInit} from '@angular/core';
import {Starships} from "../../_models/starships";
import {StarshipService} from "../../_services/starship.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-starship-comparer',
    templateUrl: './starship-comparer.component.html',
    styleUrls: ['./starship-comparer.component.scss']
})
export class StarshipComparerComponent implements OnInit, OnDestroy {

    starships: Starships[];
    subscription: Subscription;

    constructor(protected starshipService: StarshipService) {
    }

    ngOnInit(): void {
        this.loadStarships();
    }

    loadStarships() {
        this.subscription = this.starshipService.cast$.subscribe(
            (starships: Starships[]) => this.starships = starships);
    }

    removeStarship(starship: Starships) {
        this.starshipService.removeStarship(starship);
    }

    removeAllStarship() {
        this.starshipService.removeAllStarship();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
