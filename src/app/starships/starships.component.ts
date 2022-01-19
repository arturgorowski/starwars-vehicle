import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Starships, StarshipsResult} from "../_models/starships";
import {ActivatedRoute} from "@angular/router";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {StarshipsRepositoryService} from "./services/starships-repository.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StarshipStorage} from "../_helpers/starship-storage";

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, AfterViewInit {

    starshipsResult!: StarshipsResult;
    displayedColumns: string[] = ['name', 'model', 'cargo_capacity', 'action']
    dataSource!: MatTableDataSource<Starships>;

    constructor(protected route: ActivatedRoute,
                protected starshipsRepository: StarshipsRepositoryService,
                protected snackBar: MatSnackBar) {
    }

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
        this.loadStarships();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    loadStarships() {
        this.starshipsResult = this.route.snapshot.data['starships'];
        this.dataSource = new MatTableDataSource(this.starshipsResult.results);
    }

    addToCompare(starship: Starships) {
        StarshipStorage.addStarship(starship);
    }

    onPageChange(event: PageEvent) {
        const starshipsUrl = event.pageIndex > event.previousPageIndex
            ? this.starshipsResult.next : this.starshipsResult.previous;

        this.starshipsRepository.getStarships(starshipsUrl)
            .subscribe((result: StarshipsResult) => {
                this.starshipsResult = result;
                this.dataSource = new MatTableDataSource(result.results);
            },() => this.snackBar.open('Error!'));
    }
}
