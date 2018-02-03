import { UpdateShippingAddressReducer } from './update-shipping-address/update-shipping-address-action';
import { CartReducer } from './cart-reducer';
import { RequestOrderItemsProgressReducer } from './request-order-items-progress/request-order-items-progress-action';
import { UpdateOrderItemsReducer } from './update-order-items/update-order-items-action';

export class CartReducerInitializer {
    
    private reducersByClassName: { [id: string]: CartReducer<any>; } = {};    

    constructor() {
        this.addReducer(new UpdateShippingAddressReducer())
        this.addReducer(new RequestOrderItemsProgressReducer())    
        this.addReducer(new UpdateOrderItemsReducer())
    }

    private addReducer(reducer: CartReducer<any>) {
        const reducerTypeName = reducer.constructor.name;

        this.reducersByClassName[reducerTypeName] = reducer;  
    }

    getReducerByName(reducerTypeName: string): CartReducer<any> {
        const handler = this.reducersByClassName[reducerTypeName]
    
        return handler;
    }
}