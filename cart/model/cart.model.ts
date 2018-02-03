import { Address } from './address.model';
import { OrderItem } from './order-item.model';
export class Cart {
    shippingAddress = new Address();
    orderItems : Array<OrderItem> = [];

    eventStatus : Array<EventStatus> = [];
}

export class EventStatus {
    eventName: string = '';
    status: string = '';
}