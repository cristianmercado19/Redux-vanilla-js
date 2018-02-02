import { Cart } from './../../model/cart.model';
import { CartEventHandler } from './../cart-event-handler';
import { Address } from './../../model/address.model';
import { CartEvent } from "../cart-event";

export class UpdateShippingAddressEvent extends CartEvent<UpdateShippingAddressEventParam> {
    
    constructor(
        param: UpdateShippingAddressEventParam,
    ) {
        super(param, UpdateShippingAddressEventHandler.name);
    }

}

export class UpdateShippingAddressEventParam {
    newAddress = new Address();
}


export class UpdateShippingAddressEventHandler 
    implements CartEventHandler<UpdateShippingAddressEventParam> {
    handle(currentState: Cart, payload: UpdateShippingAddressEventParam): Cart {

       var newCart = new Cart();
       newCart.shippingAddress = new Address();
       newCart.shippingAddress.line1 = payload.newAddress.line1;
       newCart.shippingAddress.line2 = payload.newAddress.line2;
       newCart.shippingAddress.countryIso = payload.newAddress.countryIso;

       return newCart;
    }
    
}
