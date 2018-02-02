import { UpdateShippingAddressEventParam } from './cart/events/update-shipping-address/param/update-shipping-address-event-param';
import { UpdateShippingAddressEvent } from './cart/events/update-shipping-address/event/update-shipping-address-event';
import { Cart } from './cart/model/cart.model';
import { CartEventProcessor } from './cart/events/cart-event-processor';
import { getPlural } from "task-app-pkg/dist";
import { createStore, applyMiddleware } from 'redux'
import { CartEvent } from './cart/events/cart-event';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';



let window: any;

export class Main {

    private store: any;
    run() {

        this.attachEvents();

        const eventProcessor = new CartEventProcessor();

        this.store = createStore<Cart>((state, action) => {
            return eventProcessor.reduce(<Cart>state, <CartEvent<any>>action);
        }, devToolsEnhancer({}));

        this.store.subscribe(() => this.render());
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
}


/**
 * 
        const elementById = document.getElementById('content');

        if (elementById){


            elementById.innerHTML = getPlural("car");
        }

        console.log('content', elementById);

 */