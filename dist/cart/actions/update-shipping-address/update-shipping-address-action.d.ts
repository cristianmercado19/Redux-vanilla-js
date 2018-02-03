import { CartReducer } from './../cart-reducer';
import { Cart } from './../../model/cart.model';
import { Address } from './../../model/address.model';
import { CartAction } from '../cart-action';
export declare class UpdateShippingAddressAction extends CartAction<UpdateShippingAddressActionParam> {
    param: UpdateShippingAddressActionParam;
    constructor(param: UpdateShippingAddressActionParam);
}
export declare class UpdateShippingAddressActionParam {
    newAddress: Address;
}
export declare class UpdateShippingAddressReducer implements CartReducer<UpdateShippingAddressActionParam> {
    handle(currentState: Cart, payload: UpdateShippingAddressActionParam): Cart;
}
