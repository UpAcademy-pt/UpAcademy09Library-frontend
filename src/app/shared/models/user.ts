import { Catalog } from './catalog';

declare var Object: any;
export class User {
    'email': string;
    'name': string;
    'nip': string;
    'password': string;
    'admin': boolean;
    'id': any;
    'active': boolean;
    'favouritesBooks': Array<Catalog>;
    constructor(data?: any) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return 'User';
    }
    public static factory(data: any): User {
        return new User(data);
    }
}
