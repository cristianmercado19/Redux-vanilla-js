import { CartEventInitializer } from './cart-event-initializer';
import { Cart } from './../model/cart.model';
import { CartEvent } from './cart-event';
export declare class CartEventProcessor {
    private cartEventInitializer;
    private initState;
    constructor(cartEventInitializer: CartEventInitializer);
    reduce(state: Cart, action: CartEvent<any>): Cart;
}
