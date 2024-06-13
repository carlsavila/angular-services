export class Cocktail {

    constructor(
        private _name : string,
        private _price: number,
        private _picture: string,
    ){    }

    get name() : string{ return this._name};
    get price() : number{ return this._price};
    get picture() : string{ return this._picture};
}
