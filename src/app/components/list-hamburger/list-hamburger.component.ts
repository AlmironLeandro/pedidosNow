import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable } from 'rxjs';
// import * as action from '../ngrx/hamburger.actions'

@Component({
  selector: 'app-list-hamburger',
  templateUrl: './list-hamburger.component.html',
  styleUrls: ['./list-hamburger.component.scss']
})
export class ListHamburgerComponent implements OnInit {

  hamburgers!: hamburger[]

  constructor(private serviceHamburger: HamburgerService) {
    // this.hamburger$ = store.select('hamburger');
  }

  ngOnInit(): void {
    this.serviceHamburger.getHamburgers.subscribe(h => {
      this.hamburgers = h
    })
  }

  addOrder(h: hamburger) {
    // this.store.dispatch(action.getHamburgers({ h }));
    this.serviceHamburger.addHamburger = h
  }



}
