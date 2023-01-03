import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {HamburgersPageActions} from '../state/'

@Component({
  selector: 'app-list-hamburger',
  templateUrl: './list-hamburger.component.html',
  styleUrls: ['./list-hamburger.component.scss']
})
export class ListHamburgerComponent implements OnInit {
  login:boolean = false
  hamburgers: hamburger[] = []

  constructor(private serviceHamburger: HamburgerService, private store : Store) {

  }

  ngOnInit(): void {
    // this.serviceHamburger.getHamburgers.subscribe(h => {
    //   this.hamburgers = h
    // })
    ///NGRX
    
   
    
    this.store.dispatch(HamburgersPageActions.init())
    
  }

  addOrder(h: hamburger) {
    // this.serviceHamburger.addHamburger = h
    this.store.dispatch(HamburgersPageActions.addProduct({hamburger: h}))
  }



}
