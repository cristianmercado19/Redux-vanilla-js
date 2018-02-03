import { UpdateShippingAddressActionParam, UpdateShippingAddressAction } from './cart/actions/update-shipping-address/update-shipping-address-action';
import { CartReducerProcessor } from './cart/actions/cart-reducer-processor';
import { CartReducerInitializer } from './cart/actions/cart-reducer-initializer';
import { Cart } from './cart/model/cart.model';
import { getPlural } from "task-app-pkg/dist";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { compose } from 'redux';
import { Reducer } from 'redux';
import { Store } from 'redux';
import { CartService } from './cart/service/cart-service';
import { CartApi } from './cart/api/cart-api';
import { CartAction } from './cart/actions/cart-action';
// https://github.com/zalmoxisus/redux-devtools-extension

let window : any;

export class Main {

    private store: Store<Cart>;
    private cartService: CartService;

    constructor() {
        this.attachEvents();
        this.initializeStore();
        this.initializeCartService();
        this.store.subscribe(() => this.render());        
    }
    run() {
        console.log('running')
    }

    private initializeCartService(){
        const api = new CartApi();

        this.cartService = new CartService(api, this.store);
    }

    private initializeStore() {

        const reducerInitializer = new CartReducerInitializer();
        const reducerProcessor = new CartReducerProcessor(reducerInitializer);

        const rootReducer = (state: Cart, action: any) => {
            return reducerProcessor.reduce(state, <CartAction<any>>action);
        };

        this.store = createStore<Cart>(rootReducer, composeWithDevTools(
            applyMiddleware(thunk)
        ));
    }

    private render() {
        const div = this.getContentDiv();

        if (div) {
            div.innerText = JSON.stringify(this.store.getState(), null, 2);
        }
    }

    private attachEvents() {

        this.onClickInAR();
        this.onClickInIe();
        this.onClickInGetItems();
    }


    private onClickInGetItems() {
        const button = this.getGetItemsButton();

        if (button) {
            button.addEventListener('click', () => this.getItems());
        }
    }
    private onClickInIe() {
        const button = this.getUpdateShippingAddressButtonIe();

        if (button) {
            button.addEventListener('click', () => this.updateIe());
        }
    }
    private onClickInAR() {
        const button = this.getUpdateShippingAddressButtonAr();

        if (button) {
            button.addEventListener('click', () => this.updateAr());
        }
    }

    private getItems() {
        this.cartService.requestOrderItems();
    }

    private updateAr() {
        console.log('CLICK IN updateShippingAddress AR');
        const param = new UpdateShippingAddressActionParam();
        param.newAddress.countryIso = 'AR';
        param.newAddress.line1 = 'Urquiza';
        param.newAddress.line2 = 'BsAs';
        const action = new UpdateShippingAddressAction(param);

        this.store.dispatch(action.convertToAction());
    }

    private updateIe() {
        console.log('CLICK IN updateShippingAddress IE');
        const param = new UpdateShippingAddressActionParam();
        param.newAddress.countryIso = 'IE';
        param.newAddress.line1 = 'Apt 64 Camden Lock';
        param.newAddress.line2 = 'DUBLIN';
        const action = new UpdateShippingAddressAction(param);

        this.store.dispatch(action.convertToAction());
    }
    private getUpdateShippingAddressButtonAr() {
        return document.getElementById('updateShippingAddressAr');
    }

    private getUpdateShippingAddressButtonIe() {
        return document.getElementById('updateShippingAddressIe');
    }

    private getContentDiv() {
        return document.getElementById('content');
    }

    private getGetItemsButton() {
        return document.getElementById('getItems');
    }
}
