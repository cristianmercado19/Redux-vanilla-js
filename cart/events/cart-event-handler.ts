import { Cart } from './../model/cart.model';

export interface CartEventHandler<ParamType>{
    handle(currentState: Cart, payload: ParamType): Cart;
}