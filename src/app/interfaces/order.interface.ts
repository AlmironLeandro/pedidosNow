import hamburger from "./hamburger.interface";
export enum Status {
    pending = 'pending',
    completed = 'completed',
}
export interface carts {
    id?: string;
    status: string
}

export default class productCarts implements carts {
    id?: string;
    status: string = 'pending'
    product_id?: string;
    cart_id?: carts;
    quantity?: any;
}