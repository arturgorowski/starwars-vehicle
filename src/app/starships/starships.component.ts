import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Starships, StarshipsResult} from "../_models/starships";
import {ActivatedRoute} from "@angular/router";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, AfterViewInit {

    starshipsResult!: StarshipsResult;
    starships: Starships[] = [];
    displayedColumns: string[] = ['name', 'model', 'cargo_capacity', 'action']
    dataSource!: MatTableDataSource<Starships>;
    // dataSource = new MatTableDataSource(this.starships);

    constructor(protected route: ActivatedRoute,
                private _liveAnnouncer: LiveAnnouncer) {
    }

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
        this.loadStarships();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    loadStarships() {
        this.starshipsResult = this.route.snapshot.data['starships'];
        this.starships = this.starshipsResult.results;
        this.dataSource = new MatTableDataSource(this.starships);
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    addToCompare(starship: Starships) {
        console.log(starship)
    }

    nextPage(event: PageEvent) {
        console.log(event);
    }
}
