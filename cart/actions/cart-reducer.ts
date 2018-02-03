import { Cart } from './../model/cart.model';

export interface CartReducer<TParam>{
    handle(currentState: Cart, payload: TParam): Cart;
}