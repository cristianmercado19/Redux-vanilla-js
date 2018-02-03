import { AnyAction } from 'redux';
export abstract class CartAction<TParam> implements AnyAction {

    public param: TParam;

    constructor(public type: string) {
    }

    convertToAction(): any {
        const objectPlain = Object.assign({}, this);

        return objectPlain;
    }

}