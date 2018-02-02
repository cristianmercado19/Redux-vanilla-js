import { CartApiService } from './../../api/cart-api.service';
import { CartEventHandler } from './../cart-event-handler';
import { Cart } from './../../model/cart.model';
import { CartEvent } from "../cart-event";
export declare class RequestOrderItemsEvent extends CartEvent<RequestOrderItemsEventParam> {
}
export declare class RequestOrderItemsEventParam {
}
export declare class RequestOrderItemsEventHandler implements CartEventHandler<RequestOrderItemsEventParam> {
    private cartService;
    constructor(cartService: CartApiService);
    handle(currentState: Cart, payload: RequestOrderItemsEventParam): Cart;
}
