import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HamburgersState, HamburgersStateFeatureKey } from "./hamburger.reducer";


const hamburgersState = createFeatureSelector<HamburgersState>(HamburgersStateFeatureKey);

export const hamburgers = createSelector(
    hamburgersState,
    (hamburgersState) => hamburgersState.hamburgers
);