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
    requestOrderItems(): void;
    private dispatchOnError();
    private dispatchUpdateItems(orderItems);
    private dispatchRequestProgressAction(isInProgress);
}
