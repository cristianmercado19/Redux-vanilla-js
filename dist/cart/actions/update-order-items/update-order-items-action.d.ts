import { Cart } from './../../model/cart.model';
import { CartReducer } from './../cart-reducer';
import { OrderItem } from './../../model/order-item.model';
import { CartAction } from '../cart-action';
export declare class UpdateOrderItemsAction extends CartAction<UpdateOrderItemsActionParam> {
    param: UpdateOrderItemsActionParam;
    constructor(param: UpdateOrderItemsActionParam);
}
export declare class UpdateOrderItemsActionParam {
    orderItems: Array<OrderItem>;
}
export declare class UpdateOrderItemsReducer implements CartReducer<UpdateOrderItemsActionParam> {
    constructor();
    handle(currentState: Cart, payload: UpdateOrderItemsActionParam): Cart;
}
