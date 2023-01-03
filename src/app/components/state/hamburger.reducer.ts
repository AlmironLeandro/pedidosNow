import { createReducer, on } from "@ngrx/store";
import hamburger from "src/app/interfaces/hamburger.interface";
import { HamburgersApiActions } from ".";

export const HamburgersStateFeatureKey = 'hamburgersState'

export interface HamburgersState {
    hamburgers: hamburger[];
}


const initialState: HamburgersState =
{
    hamburgers: [],
}


export const hamburgersReducer = createReducer(
    initialState,
    on(
        HamburgersApiActions.loadAllSuccess,
        (currentState, action) => ({
            ...currentState,
             hamburgers: action.hamburger
            })

    ))