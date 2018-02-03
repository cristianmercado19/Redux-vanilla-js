import { OrderItem } from './../../model/order-item.model';
import { CartEventHandler } from './../cart-event-handler';
import { Cart, EventStatus } from './../../model/cart.model';
import { CartEvent } from "../cart-event";

export class RequestOrderItemsProgressEvent extends CartEvent<RequestOrderItemsProgressEventParam> {
    
    constructor(param: RequestOrderItemsProgressEventParam) {
        super(param, RequestOrderItemsInProgressEventHandler.name);
    }
}

export class RequestOrderItemsProgressEventParam {

    constructor(
        public inProgress = false
    ) {
        
    }
}


export class RequestOrderItemsInProgressEventHandler implements CartEventHandler<RequestOrderItemsProgressEventParam> {
    
    constructor() {
    }
    handle(currentState: Cart, payload: RequestOrderItemsProgressEventParam): Cart {

        const newCart = Object.assign({}, currentState);

        newCart.eventStatus[0] = new EventStatus();

        newCart.eventStatus[0].eventName = 'RequestOrderItems';
        newCart.eventStatus[0].status = payload.inProgress? "inProgress": "Done";

        return newCart;
    }

}

export class UpdateOrderItemsEvent extends CartEvent<UpdateOrderItemsEventParam> {
    

    constructor(param: UpdateOrderItemsEventParam) {
        super(param, UpdateOrderItemsEventHandler.name);
    }
}

export class UpdateOrderItemsEventParam {
    orderItems: Array<OrderItem> = [];
}


export class UpdateOrderItemsEventHandler implements CartEventHandler<UpdateOrderItemsEventParam> {
    
    constructor() {
    }
    handle(currentState: Cart, payload: UpdateOrderItemsEventParam): Cart {

        const newState = Object.assign({}, currentState);

        newState.orderItems = [];

        payload.orderItems.forEach(orderItem => {
            const copyOfOrderItem = Object.assign({}, orderItem);
            newState.orderItems.push(copyOfOrderItem);            
        });

        return newState;
    }

}