import {Component, Input, OnInit} from '@angular/core';
import {Starships} from "../../../_models/starships";
import {StarshipService} from "../../../_services/starship.service";

@Component({
    selector: 'app-compared-item',
    templateUrl: './compared-item.component.html',
    styleUrls: ['./compared-item.component.scss']
})
export class ComparedItemComponent implements OnInit {

    _starship: Starships;
    @Input() isBestPrice: boolean = false;
    @Input() isTheLongest: boolean = false;
    @Input() isTheBestCapacity: boolean = false;
    @Input() isTheFastest: boolean = false;
    @Input() isTheBestMGLT: boolean = false;

    @Input('starship') set starship(starship: Starships) {
        this._starship = starship;
    }

    get starship(): Starships {
        return this._starship;
    }

    constructor(protected starshipService: StarshipService) {
    }

    ngOnInit(): void {
    }

    removeStarship(starship: Starships) {
        this.starshipService.removeStarship(starship);
    }
}
