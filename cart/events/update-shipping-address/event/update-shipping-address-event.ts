import { UpdateShippingAddressEventHandler } from './../handler/update-shipping-address-event-handler';
import { UpdateShippingAddressEventParam } from './../param/update-shipping-address-event-param';
import { CartEvent } from "../../cart-event";


export class UpdateShippingAddressEvent extends CartEvent<UpdateShippingAddressEventParam> {
    
    constructor(
        param: UpdateShippingAddressEventParam,
    ) {
        super(param, UpdateShippingAddressEventHandler.name);
    }

}