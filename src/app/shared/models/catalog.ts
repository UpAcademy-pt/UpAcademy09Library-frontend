declare var Object: any;
export class Catalog {
    // ? quer dizer opcional
    id?: number;
    title: String ;
	description: String;
	author: String;
	photoLink: String;
	topic: String;
	location: String;
	criationDate: String;
	lastChangeDate: String;
    isbn: String;
	state: String;
    constructor(catalog?: any) {
        Object.assign(this, catalog);
    }
}
