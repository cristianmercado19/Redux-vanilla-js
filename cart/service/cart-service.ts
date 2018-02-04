import { RequestOrderItemsProgressObserver } from './request-order-items-progress-observer';
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

    requestOrderItems(progressObserver: RequestOrderItemsProgressObserver){
        
        progressObserver.onStart();

        this.api.getOrderItems()
        .take(1)
        .finally(() => {
            progressObserver.onComplete();
        })
        .subscribe(
            (orderItems) => {
                progressObserver.onSuccess(orderItems);
            },
            (error) => {
                progressObserver.onfailure();
            }
        );

    }

    private dispatchOnError(){

    }




}