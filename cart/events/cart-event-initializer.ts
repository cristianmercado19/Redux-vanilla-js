import { CartEventHandler } from './cart-event-handler';
import { UpdateShippingAddressEventHandler } from './update-shipping-address/update-shipping-address-event';
export class CartEventInitializer {
    
    private events: { [id: string]: CartEventHandler<any>; } = {};    

    constructor() {
        this.addToEventList(new UpdateShippingAddressEventHandler())
    }

    private addToEventList(eventHandler: CartEventHandler<any>) {
        this.events[eventHandler.constructor.name] = eventHandler;  
    }

    getEventHandler(eventType: string): CartEventHandler<any> {
        const handler = this.events[eventType]
    
        return handler;
    }
}