import { OrderItem } from './../model/order-item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
export declare class CartApi {
    getOrderItems(): Observable<Array<OrderItem>>;
}
