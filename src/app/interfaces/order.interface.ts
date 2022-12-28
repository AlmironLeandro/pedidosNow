import hamburger from "./hamburger.interface";

export  interface carts {
    id?: string;
    status: 'pending' | 'completed'
}

export  interface product_carts {
    product_id: string;
    cart_id: carts;
    quantity: hamburger[];
}