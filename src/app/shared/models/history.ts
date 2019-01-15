import { User } from './user';
import { Catalog } from './catalog';

declare var Object: any;
export class History {
    id?:number;
    reservationDate?: Date;
    pickupDate?: Date;
    deliveryDate?: Date;
    historyBook: Catalog;
    historyUser: User;
    constructor(history?: any) {
        Object.assign(this, history);
    }
}
