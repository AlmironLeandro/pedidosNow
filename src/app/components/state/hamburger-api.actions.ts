import { createAction, props } from "@ngrx/store";
import hamburger from "src/app/interfaces/hamburger.interface";



export const loadAllSuccess = createAction(
    '[Hamburgers Api] Load All Success',
    props<{ hamburger: hamburger[] }>()
)


export const loadAllError = createAction(
    '[Hamburgers Api] Load All Error',
    props<{ errorMessage: string }>()
)


