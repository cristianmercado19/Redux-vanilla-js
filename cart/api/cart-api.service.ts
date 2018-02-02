import { OrderItem } from './../model/order-item.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export class CartApiService {

    getOrderItems(): Observable<Array<OrderItem>> {
        const items: Array<OrderItem> = [];

        const order1 = new OrderItem();
        order1.id = 25;
        order1.name = 'Item 1';

        items.push(order1);
    
        const order2 = new OrderItem();
        order2.id = 25;
        order2.name = 'Item 1';
        
        items.push(order2);
        
        return Observable.of(items).delay(2000);
    }
}
