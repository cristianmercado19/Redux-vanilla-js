import { AnyAction } from 'redux';
export declare abstract class CartEvent<TPayload> implements AnyAction {
    [extraProps: string]: any;
    type: any;
    param: TPayload;
    constructor(param: TPayload, type: string);
    convertToAction(): any;
}
