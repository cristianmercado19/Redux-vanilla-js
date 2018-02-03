import { CartReducerInitializer } from './cart-reducer-initializer';
import { Cart } from './../model/cart.model';
import { CartAction } from './cart-action';


export class CartReducerProcessor {

    private initState = new Cart();

    constructor(private cartReducerInitializer: CartReducerInitializer) {
    }
    
    reduce(state: Cart, action: CartAction<any>): Cart {

        if (typeof state === 'undefined') {
            return this.initState;
        }

        const reducer = this.cartReducerInitializer.getReducerByName(action.type);

        const newState = reducer.handle(state, action.param);
        
        return newState;
    }

}
