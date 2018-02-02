import { CartEventHandler } from './cart-event-handler';
export declare class CartEventInitializer {
    private events;
    constructor();
    private addToEventList(eventHandler);
    getEventHandler(eventType: string): CartEventHandler<any>;
}
