import { CartReducer } from './../cart-reducer';
import { OrderItem } from './../../model/order-item.model';
import { Cart } from './../../model/cart.model';
import { CartAction } from "../cart-action";

export class RequestOrderItemsProgressAction extends CartAction<RequestOrderItemsProgressActionParam> {
    
    constructor(public param: RequestOrderItemsProgressActionParam) {
        super(RequestOrderItemsProgressReducer.name);
    }
}

export class RequestOrderItemsProgressActionParam {

    constructor(
        public inProgress = false
    ) {
    }
}


export class RequestOrderItemsProgressReducer implements CartReducer<RequestOrderItemsProgressActionParam> {
    
    constructor() {
    }
    handle(currentState: Cart, payload: RequestOrderItemsProgressActionParam): Cart {

        const newCart = Object.assign({}, currentState);

        newCart.requestOrderItemActionStatus = payload.inProgress? "inProgress": "Done";

        return newCart;
    }

}
