import { Address } from './../../../model/address.model';
import { Cart } from './../../../model/cart.model';
import { UpdateShippingAddressEventParam } from './../param/update-shipping-address-event-param';
import { CartEventHandler } from './../../cart-event-handler';
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