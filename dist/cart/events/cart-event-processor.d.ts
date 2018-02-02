import { Cart } from './../model/cart.model';
import { CartEvent } from './cart-event';
export declare class CartEventProcessor {
    private events;
    private initState;
    constructor();
    reduce(state: Cart, action: CartEvent<any>): Cart;
    private getEventHandler(eventType);
}
