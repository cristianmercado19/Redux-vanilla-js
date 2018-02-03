import { RequestOrderItemsProgressEvent, UpdateOrderItemsEvent, UpdateOrderItemsEventParam, RequestOrderItemsProgressEventParam } from './../events/request-order-items/request-order-items-event';
import { Cart } from './../model/cart.model';
import { CartApi } from './../api/cart-api';
import { Store } from 'redux';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { OrderItem } from '../model/order-item.model';

export class CartService {

    constructor(
        private api: CartApi,
        private store: Store<Cart>
    ){

    }

    requestOrderItems(){
        this.dispatchInProgress();

        this.api.getOrderItems()
        .take(1)
        .finally(() => {
            this.dispatchCompleted();
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
        const param = new UpdateOrderItemsEventParam();
        param.orderItems = orderItems;

        const eventInProgress = new UpdateOrderItemsEvent(param);

        this.store.dispatch(eventInProgress.convertToAction());
    }

    private dispatchInProgress() {
        const param = new RequestOrderItemsProgressEventParam(true);
        const eventInProgress = new RequestOrderItemsProgressEvent(param);

        this.store.dispatch(eventInProgress.convertToAction());
    }

    private dispatchCompleted() {
        const param = new RequestOrderItemsProgressEventParam(false);
        const eventInProgress = new RequestOrderItemsProgressEvent(param);

        this.store.dispatch(eventInProgress.convertToAction());
    }
}