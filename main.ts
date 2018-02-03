import { UpdateShippingAddressEventParam, UpdateShippingAddressEvent } from './cart/events/update-shipping-address/update-shipping-address-event';
import { CartEventInitializer } from './cart/events/cart-event-initializer';
import { Cart } from './cart/model/cart.model';
import { CartEventProcessor } from './cart/events/cart-event-processor';
import { getPlural } from "task-app-pkg/dist";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { CartEvent } from './cart/events/cart-event';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { compose } from 'redux';
import { Reducer } from 'redux';
import { UpdateOrderItemsEventParam, UpdateOrderItemsEvent } from './cart/events/request-order-items/request-order-items-event';
import { Store } from 'redux';
import { CartService } from './cart/service/cart-service';
import { CartApi } from './cart/api/cart-api';
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

    }

    private initializeCartService(){
        const api = new CartApi();

        this.cartService = new CartService(api, this.store);
    }

    private initializeStore() {

        const eventInitializer = new CartEventInitializer();
        const eventProcessor = new CartEventProcessor(eventInitializer);

        const rootReducer = (state: Cart, action: any) => {
            return eventProcessor.reduce(state, <CartEvent<any>>action);
        };

        this.store = createStore<Cart>(rootReducer, composeWithDevTools(
            applyMiddleware(thunk)
        ));
    }

    private render() {
        const div = this.getContentDiv();

        if (div) {
            div.innerHTML = JSON.stringify(this.store.getState());
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
        const param = new UpdateShippingAddressEventParam();
        param.newAddress.countryIso = 'AR';
        param.newAddress.line1 = 'Urquiza';
        param.newAddress.line2 = 'BsAs';
        const event = new UpdateShippingAddressEvent(param);

        this.store.dispatch(event.convertToAction());
    }

    private updateIe() {
        console.log('CLICK IN updateShippingAddress IE');
        const param = new UpdateShippingAddressEventParam();
        param.newAddress.countryIso = 'IE';
        param.newAddress.line1 = 'Apt 64 Camden Lock';
        param.newAddress.line2 = 'DUBLIN';
        const event = new UpdateShippingAddressEvent(param);

        this.store.dispatch(event.convertToAction());
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


/**
 * 
        const elementById = document.getElementById('content');

        if (elementById){


            elementById.innerHTML = getPlural("car");
        }

        console.log('content', elementById);

 */