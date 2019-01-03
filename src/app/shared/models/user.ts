import {} from '../index';

declare var Object: any;
export class User {
    "email":string ;
	 "name":string;
	"nip":string ;
	"password":string;
	 "admin": boolean;
    constructor(data?: any) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return "User";
    }
    public static factory(data: any): User {
        return new User(data);
    }
}