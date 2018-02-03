import { AnyAction } from 'redux';
export declare abstract class CartAction<TParam> implements AnyAction {
    type: string;
    param: TParam;
    constructor(type: string);
    convertToAction(): any;
}
