import {Component, OnInit} from '@angular/core';
import {Starships} from "../../_models/starships";
import {ActivatedRoute, Router} from "@angular/router";
import {StarshipService} from "../../_services/starship.service";

@Component({
    selector: 'app-starship-details',
    templateUrl: './starship-details.component.html',
    styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

    starship: Starships;
    constructor(protected route: ActivatedRoute,
                protected router: Router,
                protected starshipService: StarshipService) {
    }

    ngOnInit(): void {
        this.loadStarshipDetails();
    }

    loadStarshipDetails() {
        this.starship = this.route.snapshot.data['starshipDetails'];
    }

    addToCompare(starship: Starships) {
        this.starshipService.addStarship(starship);
        this.router.navigate(['/']).then();
    }
}
