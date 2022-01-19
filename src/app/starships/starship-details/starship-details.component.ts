import {Component, OnInit} from '@angular/core';
import {Starships} from "../../_models/starships";
import {ActivatedRoute} from "@angular/router";
import {StarshipStorage} from "../../_helpers/starship-storage";

@Component({
    selector: 'app-starship-details',
    templateUrl: './starship-details.component.html',
    styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

    starship: Starships;
    constructor(protected route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.loadStarshipDetails();
    }

    loadStarshipDetails() {
        this.starship = this.route.snapshot.data['starshipDetails'];
    }

    addToCompare(starship: Starships) {
        StarshipStorage.addStarship(starship);
    }
}
