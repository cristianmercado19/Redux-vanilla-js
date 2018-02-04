import { CartReducer } from './../cart-reducer';
import { Cart } from './../../model/cart.model';
import { CartAction } from "../cart-action";
export declare class RequestOrderItemsProgressAction extends CartAction<RequestOrderItemsProgressActionParam> {
    param: RequestOrderItemsProgressActionParam;
    constructor(param: RequestOrderItemsProgressActionParam);
}
export declare class RequestOrderItemsProgressActionParam {
    inProgress: boolean;
    constructor(inProgress?: boolean);
}
export declare class RequestOrderItemsProgressReducer implements CartReducer<RequestOrderItemsProgressActionParam> {
    constructor();
    handle(currentState: Cart, payload: RequestOrderItemsProgressActionParam): Cart;
}
