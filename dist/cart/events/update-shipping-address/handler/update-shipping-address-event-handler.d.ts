import { Cart } from './../../../model/cart.model';
import { UpdateShippingAddressEventParam } from './../param/update-shipping-address-event-param';
import { CartEventHandler } from './../../cart-event-handler';
export declare class UpdateShippingAddressEventHandler implements CartEventHandler<UpdateShippingAddressEventParam> {
    handle(currentState: Cart, payload: UpdateShippingAddressEventParam): Cart;
}
