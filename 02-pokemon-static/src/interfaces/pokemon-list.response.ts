export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result {
    _id:  string;
    name: string;
    types: {
        name:string
        weaknesses: string[]
        resistances: string[]
    }[],
    stats: {
        hp:number
        attack: number
        defense: number
        spAtk: number,
        spDef: number,
        speed: number
    },
    height: number,
    weight: number,
    description: string,
    imageUrl: string
    generation: number
    createdAt: string
}
