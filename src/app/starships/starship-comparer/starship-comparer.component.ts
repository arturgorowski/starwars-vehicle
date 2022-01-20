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

    bestPrice: number;
    bestLength: number;
    bestCargoCapacity: number;
    bestMaxSpeed: number;
    bestMGLTValue: number;

    constructor(protected starshipService: StarshipService) {
    }

    ngOnInit(): void {
        this.loadStarships();
    }

    loadStarships() {
        this.subscription = this.starshipService.cast$.subscribe(
            (starships: Starships[]) => {
                this.starships = starships;
                this.compareStarships();
            });
    }

    removeAllStarship() {
        this.starshipService.removeAllStarship();
    }

    compareStarships() {
        this.bestPrice = this.findMinValue('cost_in_credits');
        this.bestLength = this.findMaxValue('length');
        this.bestCargoCapacity = this.findMaxValue('cargo_capacity');
        this.bestMaxSpeed = this.findMaxValue('max_atmosphering_speed');
        this.bestMGLTValue = this.findMaxValue('MGLT');
    }

    findMinValue(key: string): number {
        return Math.min(...this.starships
            .filter((item: Starships) => item[key] !== 'unknown' && item[key] !== 'n/a')
            .map((item: Starships) => parseFloat(item[key]))
        );
    }

    findMaxValue(key: string): number {
        return Math.max(...this.starships
            .filter((item: Starships) => item[key] !== 'unknown' && item[key] !== 'n/a')
            .map((item: Starships) => {
                if (key === 'length') {
                    item[key] = item[key].replace(',', '.');
                }
                if (key === 'max_atmosphering_speed') {
                    item[key] = item[key].replace('km', '');
                }
                return parseFloat(item[key]);
            })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
