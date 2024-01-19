export class Product {
    // id: string;
    // title: string;
    // description: string;
    // price: number;

    // adding the `public` accessor in the constructor parameters, Nest automatically creates the equally names property
    constructor(public id: string, public title: string, public description: string, public price: number){

        // this.id = id;
        // this.title = title;
        // this.description = description;
        // this.price = price;

    }
}