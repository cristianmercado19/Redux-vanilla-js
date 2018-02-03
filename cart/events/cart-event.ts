import { CartEventHandler } from './cart-event-handler';
import { AnyAction } from 'redux';
export abstract class CartEvent<TPayload> implements AnyAction {
    type: any;

    param: TPayload;

    constructor(
        param: TPayload,
        type: string
    ) {
        this.param = param;
        this.type = type;
    }

    convertToAction(): any {
        const eventPlain = Object.assign({}, this);

        return eventPlain;
    }

}