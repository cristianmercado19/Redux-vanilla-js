import { OrderItem } from './../model/order-item.model';
export interface RequestOrderItemsProgressObserver {    
    
    onStart(): any;
    onComplete(): any;
    onSuccess(orderItems : Array<OrderItem>): any;
    onfailure(): any;
}