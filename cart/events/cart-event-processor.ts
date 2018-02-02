import { CartEventInitializer } from './cart-event-initializer';
import { Cart } from './../model/cart.model';
import { CartEventHandler } from './cart-event-handler';
import { CartEvent } from './cart-event';


export class CartEventProcessor {

    private initState = new Cart();

    constructor(private cartEventInitializer: CartEventInitializer) {
    }
    
    reduce(state: Cart, action: CartEvent<any>): Cart {

        if (typeof state === 'undefined') {
            return this.initState;
        }

        const eventHandler = this.cartEventInitializer.getEventHandler(action.type);

        const newState = eventHandler.handle(state, action.param);
        
        return newState;
    }

}
