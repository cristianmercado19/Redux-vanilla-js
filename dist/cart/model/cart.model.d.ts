import { Address } from './address.model';
import { OrderItem } from './order-item.model';
export declare class Cart {
    shippingAddress: Address;
    orderItems: Array<OrderItem>;
}
