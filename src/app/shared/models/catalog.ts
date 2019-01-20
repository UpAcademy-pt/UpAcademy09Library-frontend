import { Url } from 'url';

declare var Object: any;
export class Catalog {
	id?: number;
	title: String;
	description: String;
	author: String;
	photoLink: string;
	topic: String;
	location: String;
	criationDate: String;
	lastChangeDate: String;
	isbn: String;
	rating: number;
	state: String;

	constructor(catalog?: any) {
 Object.assign(this, catalog);
	}
}
