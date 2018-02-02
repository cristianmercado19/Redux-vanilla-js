import { Cart } from './../model/cart.model';
import { CartEventHandler } from './cart-event-handler';
import { UpdateShippingAddressEventHandler } from './update-shipping-address/handler/update-shipping-address-event-handler';
import { CartEvent } from './cart-event';


export class CartEventProcessor {

    private events: { [id: string]: CartEventHandler<any>; } = {};    
    private initState = new Cart();

    constructor() {
        this.events[UpdateShippingAddressEventHandler.name] = new UpdateShippingAddressEventHandler();  
    }
    
    reduce(state: Cart, action: CartEvent<any>): Cart {

        if (typeof state === 'undefined') {
            return this.initState;
        }

        const eventHandler = this.getEventHandler(action.type);

        const newState = eventHandler.handle(state, action.param);
        
        return newState;
    }

    private getEventHandler(eventType: string): CartEventHandler<any> {
        const handler = this.events[eventType]
    
        return handler;
    }
}
