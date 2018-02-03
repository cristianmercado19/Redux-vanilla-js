import { CartReducer } from './../cart-reducer';
import { Cart } from './../../model/cart.model';
import { Address } from './../../model/address.model';
import { CartAction } from '../cart-action';

export class UpdateShippingAddressAction extends CartAction<UpdateShippingAddressActionParam> {
    
    constructor(public param: UpdateShippingAddressActionParam) {
        super(UpdateShippingAddressReducer.name);
    }

}

export class UpdateShippingAddressActionParam {
    newAddress = new Address();
}


export class UpdateShippingAddressReducer implements CartReducer<UpdateShippingAddressActionParam> {
    handle(currentState: Cart, payload: UpdateShippingAddressActionParam): Cart {

       var newCart = Object.assign({}, currentState);
       newCart.shippingAddress = new Address();
       newCart.shippingAddress.line1 = payload.newAddress.line1;
       newCart.shippingAddress.line2 = payload.newAddress.line2;
       newCart.shippingAddress.countryIso = payload.newAddress.countryIso;

       return newCart;
    }
    
}
