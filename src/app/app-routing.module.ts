import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarshipsComponent} from "./starships/starships.component";
import {StarshipsResolveService} from "./starships/services/starships-resolve.service";
import {StarshipDetailsComponent} from "./starships/starship-details/starship-details.component";
import {StarshipDetailsResolveService} from "./starships/services/starship-details-resolve.service";

const routes: Routes = [
        {
            path: 'starships',
            children: [
                {
                    path: '',
                    component: <any>StarshipsComponent,
                    resolve: {starships: StarshipsResolveService}
                },
                {
                    path: 'details',
                    component: <any>StarshipDetailsComponent,
                    resolve: {starshipDetails: StarshipDetailsResolveService}
                }
            ]
        },
        {path: "", redirectTo: "/starships", pathMatch: "full"},
        {path: "**", redirectTo: "/starships", pathMatch: "full"}
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
