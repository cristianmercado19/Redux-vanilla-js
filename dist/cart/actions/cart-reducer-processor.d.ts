import { CartReducerInitializer } from './cart-reducer-initializer';
import { Cart } from './../model/cart.model';
import { CartAction } from './cart-action';
export declare class CartReducerProcessor {
    private cartReducerInitializer;
    private initState;
    constructor(cartReducerInitializer: CartReducerInitializer);
    reduce(state: Cart, action: CartAction<any>): Cart;
}
