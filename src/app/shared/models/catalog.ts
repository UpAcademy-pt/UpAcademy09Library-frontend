export class Catalog {
    //ver porque do ?
    id?: number;
    title: string;
    description: string;
    author: string;
    isbn: string;
    constructor(catalog?: any) {
        Object.assign(this, catalog);
    }
}
