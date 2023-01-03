import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HamburgersApiActions, HamburgersPageActions } from ".";
import { exhaustMap, map, catchError, of } from 'rxjs'
import { HamburgerService } from "../shared/hamburger.service";



@Injectable()
export class HamburgerEffects {
    constructor(private actions$: Actions, private hamburgerService: HamburgerService) { }



    public loadAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HamburgersPageActions.init),
            exhaustMap((initAction) => this.hamburgerService.getHamburgers.pipe(
                map((hamburger) => HamburgersApiActions.loadAllSuccess({ hamburger })),
                catchError(() => of(HamburgersApiActions.loadAllError({
                    errorMessage:
                        'Ha ocurrido un error al intentar obtener el listado de hamburguesas'
                })))
            )
            )
        )
    });
}