import { RequestOrderItemsProgressAction, RequestOrderItemsProgressActionParam } from './../actions/request-order-items-progress/request-order-items-progress-action';
import { UpdateOrderItemsActionParam, UpdateOrderItemsAction } from './../actions/update-order-items/update-order-items-action';
import { OrderItem } from './../model/order-item.model';
import { RequestOrderItemsProgressObserver } from './../service/request-order-items-progress-observer';
import { UpdateShippingAddressActionParam, UpdateShippingAddressAction } from '../actions/update-shipping-address/update-shipping-address-action';
import { CartReducerProcessor } from '../actions/cart-reducer-processor';
import { CartReducerInitializer } from '../actions/cart-reducer-initializer';
import { Cart } from '../model/cart.model';
import { getPlural } from "task-app-pkg/dist";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { compose } from 'redux';
import { Reducer } from 'redux';
import { Store } from 'redux';
import { CartService } from '../service/cart-service';
import { CartApi } from '../api/cart-api';
import { CartAction } from '../actions/cart-action';
// https://github.com/zalmoxisus/redux-devtools-extension

let window: any;

export class CartView {


    private store: Store<Cart>;
    private cartService: CartService;

    constructor() {
        this.attachEvents();
        this.initializeStore();
        this.initializeCartService();
        this.store.subscribe(() => this.render());
    }

    private initializeCartService() {
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

        div.innerText = JSON.stringify(this.store.getState(), null, 2);
    }

    private attachEvents() {

        this.onClickInAR();
        this.onClickInIe();
        this.onClickInGetItems();
        this.onClickInGetItemsWithNotifier();
    }

    private onClickInGetItemsWithNotifier(): any {
        const button = this.getItemsWithNotifierButton();

        button.addEventListener('click', () => this.getItemsWithNotifier());
    }

    private getItemsWithNotifier() {

    }

    private onClickInGetItems() {
        const button = this.getGetItemsButton();

        button.addEventListener('click', () => this.getItems());
    }
    private onClickInIe() {
        const button = this.getUpdateShippingAddressButtonIe();

        button.addEventListener('click', () => this.updateIe());
    }
    private onClickInAR() {
        const button = this.getUpdateShippingAddressButtonAr();

        button.addEventListener('click', () => this.updateAr());
    }

    private getItems() {
        const progressObserver = new StateManagerOnRequestOrderItems(this.store);
        this.cartService.requestOrderItems(progressObserver);
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
    private getItemsWithNotifierButton() {
        return document.getElementById('getItemsWithNotifier');
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

class StateManagerOnRequestOrderItems implements RequestOrderItemsProgressObserver {
    onfailure() {
    }
    onStart() {
        this.dispatchRequestProgressAction(true);
    }

    onComplete() {
        this.dispatchRequestProgressAction(false);
    }

    onSuccess(orderItems: Array<OrderItem>) {
        this.dispatchUpdateItems(orderItems)
    }

    constructor(
        private store: Store<Cart>,
    ) {
    }

    private dispatchRequestProgressAction(isInProgress: boolean) {
        const param = new RequestOrderItemsProgressActionParam(isInProgress);
        const action = new RequestOrderItemsProgressAction(param);

        this.store.dispatch(action.convertToAction());
    }

    private dispatchUpdateItems(orderItems: Array<OrderItem>) {
        const param = new UpdateOrderItemsActionParam();
        param.orderItems = orderItems;

        const action = new UpdateOrderItemsAction(param);

        this.store.dispatch(action.convertToAction());
    }
}