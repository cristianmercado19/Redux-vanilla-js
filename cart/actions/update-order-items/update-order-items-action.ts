import { Cart } from './../../model/cart.model';
import { CartReducer } from './../cart-reducer';
import { OrderItem } from './../../model/order-item.model';
import { CartAction } from '../cart-action';

export class UpdateOrderItemsAction extends CartAction<UpdateOrderItemsActionParam> {


    constructor(public param: UpdateOrderItemsActionParam) {
        super(UpdateOrderItemsReducer.name);
    }
}

export class UpdateOrderItemsActionParam {
    orderItems: Array<OrderItem> = [];
}


export class UpdateOrderItemsReducer implements CartReducer<UpdateOrderItemsActionParam> {

    constructor() {
    }

    handle(currentState: Cart, payload: UpdateOrderItemsActionParam): Cart {

        const newState = Object.assign({}, currentState);

        newState.orderItems = [];

        payload.orderItems.forEach(orderItem => {
            const copyOfOrderItem = Object.assign({}, orderItem);
            newState.orderItems.push(copyOfOrderItem);
        });

        return newState;
    }

}