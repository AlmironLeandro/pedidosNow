import { createReducer, on } from '@ngrx/store';
import hamburger from 'src/app/interfaces/hamburger.interface';
import * as action from './hamburger.actions';


export const hamburger: hamburger[] = [];

export const hamburgerReducer = createReducer(
    hamburger,
    on(action.getHamburgers ,state => state),
);

