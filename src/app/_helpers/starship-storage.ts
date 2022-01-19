import {Starships} from "../_models/starships";

const KEY_STARSHIP = 'starships';

interface StarshipList {
    starships: Starships[];
}

const EMPTY_STARSHIP_OBJECT: StarshipList = {
    starships: []
};

export class StarshipStorage {

    private static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    private static setItem(key, value: StarshipList) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    private static getStarshipsItem(): StarshipList {
        if (!this.getItem(KEY_STARSHIP)) {
            this.setItem(KEY_STARSHIP, EMPTY_STARSHIP_OBJECT);
        }
        return this.getItem(KEY_STARSHIP);
    }

    private static addItemToStarships(objectKey: string, starship: Starships) {
        const starshipList: StarshipList = this.getStarshipsItem();

        Object.keys(starshipList).forEach(key => {
            if (key === objectKey) {
                const starships: Starships[] = this.filterStarship(starshipList[key], starship);
                starships.push(starship);
                this.setItem(KEY_STARSHIP, {starships: starships});
            }
        });
    }

    private static removeStarshipsItem(objectKey: string, starship: Starships): void {
        const starshipList: StarshipList = this.getStarshipsItem();

        Object.keys(starshipList).forEach(key => {
            if (key === objectKey) {
                this.setItem(KEY_STARSHIP, {starships: this.filterStarship(starshipList[key], starship)});
            }
        });
    }

    private static filterStarship(starshipList: Starships[], starship: Starships) {
        return starshipList.filter((item: Starships) => item.name !== starship.name);
    }

    static addStarship(starships: Starships) {
        this.addItemToStarships(KEY_STARSHIP, starships);
    }

    static removeStarship(starships: Starships) {
        this.removeStarshipsItem(KEY_STARSHIP, starships);
    }

    static getStarships(): Starships[] {
        return this.getStarshipsItem().starships;
    }

    static clearData(): void {
        localStorage.removeItem(KEY_STARSHIP);
    }

}
