import { CartApiService } from './../../api/cart-api.service';
import { CartEventHandler } from './../cart-event-handler';
import { Cart } from './../../model/cart.model';
import { CartEvent } from "../cart-event";


export class RequestOrderItemsEvent extends CartEvent<RequestOrderItemsEventParam> {
}

export class RequestOrderItemsEventParam {
}


export class RequestOrderItemsEventHandler implements CartEventHandler<RequestOrderItemsEventParam> {
    
    constructor(private cartService: CartApiService) {
    }
    handle(currentState: Cart
        , payload: RequestOrderItemsEventParam): Cart {

        this.cartService.getOrderItems()
        .subscribe(
            
        )

        return currentState;
    }

}