import { Address } from './address.model';
import { OrderItem } from './order-item.model';
export class Cart {
    shippingAddress = new Address();
    orderItems : Array<OrderItem> = [];

    requestOrderItemActionStatus : string;
}
