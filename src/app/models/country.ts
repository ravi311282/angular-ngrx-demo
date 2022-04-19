export interface Country {
    name: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    area: number;
    currencies: Currency[];
    flag: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}
