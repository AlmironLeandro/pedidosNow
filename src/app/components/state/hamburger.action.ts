import { createAction, props } from "@ngrx/store";
import hamburger from "src/app/interfaces/hamburger.interface";

//

export const init = createAction('[Main page] init');

export const addProduct = createAction('[Main page] Add Product to cart',
    props<{ hamburger: hamburger }>())

export const removeProduct = createAction('[btn-cell component] remove producto from cart',
    props<{ idData: string }>())


