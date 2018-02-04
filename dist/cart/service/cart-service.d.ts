import { RequestOrderItemsProgressObserver } from './request-order-items-progress-observer';
import { Cart } from './../model/cart.model';
import { CartApi } from './../api/cart-api';
import { Store } from 'redux';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
export declare class CartService {
    private api;
    private store;
    constructor(api: CartApi, store: Store<Cart>);
    requestOrderItems(progressObserver: RequestOrderItemsProgressObserver): void;
    private dispatchOnError();
}
