import { UpdateShippingAddressEventParam } from './../param/update-shipping-address-event-param';
import { CartEvent } from "../../cart-event";
export declare class UpdateShippingAddressEvent extends CartEvent<UpdateShippingAddressEventParam> {
    constructor(param: UpdateShippingAddressEventParam);
}
