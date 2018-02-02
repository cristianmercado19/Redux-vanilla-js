import { Cart } from './../../model/cart.model';
import { CartEventHandler } from './../cart-event-handler';
import { Address } from './../../model/address.model';
import { CartEvent } from "../cart-event";
export declare class UpdateShippingAddressEvent extends CartEvent<UpdateShippingAddressEventParam> {
    constructor(param: UpdateShippingAddressEventParam);
}
export declare class UpdateShippingAddressEventParam {
    newAddress: Address;
}
export declare class UpdateShippingAddressEventHandler implements CartEventHandler<UpdateShippingAddressEventParam> {
    handle(currentState: Cart, payload: UpdateShippingAddressEventParam): Cart;
}
