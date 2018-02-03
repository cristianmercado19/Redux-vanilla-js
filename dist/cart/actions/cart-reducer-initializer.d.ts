import { CartReducer } from './cart-reducer';
export declare class CartReducerInitializer {
    private reducersByClassName;
    constructor();
    private addReducer(reducer);
    getReducerByName(reducerTypeName: string): CartReducer<any>;
}
