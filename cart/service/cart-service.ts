import { Cart } from './../model/cart.model';
import { CartApi } from './../api/cart-api';
import { Store } from 'redux';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { OrderItem } from '../model/order-item.model';
import { UpdateOrderItemsActionParam, UpdateOrderItemsAction } from '../actions/update-order-items/update-order-items-action';
import { RequestOrderItemsProgressAction, RequestOrderItemsProgressActionParam } from '../actions/request-order-items-progress/request-order-items-progress-action';

export class CartService {

    constructor(
        private api: CartApi,
        private store: Store<Cart>
    ){

    }

    requestOrderItems(){
        this.dispatchRequestProgressAction(true);

        this.api.getOrderItems()
        .take(1)
        .finally(() => {
            this.dispatchRequestProgressAction(false);
        })
        .subscribe(
            (orderItems) => {
                this.dispatchUpdateItems(orderItems)
            },
            (error) => {
                this.dispatchOnError();
            }
        );

    }

    private dispatchOnError(){

    }

    private dispatchUpdateItems(orderItems: Array<OrderItem>){
        const param = new UpdateOrderItemsActionParam();
        param.orderItems = orderItems;

        const action = new UpdateOrderItemsAction(param);

        this.store.dispatch(action.convertToAction());
    }

    private dispatchRequestProgressAction(isInProgress: boolean) {
        const param = new RequestOrderItemsProgressActionParam(isInProgress);
        const action = new RequestOrderItemsProgressAction(param);

        this.store.dispatch(action.convertToAction());
    }
}