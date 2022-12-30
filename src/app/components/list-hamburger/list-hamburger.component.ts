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
  login:boolean = false
  hamburgers!: hamburger[]

  constructor(private serviceHamburger: HamburgerService) {

  }

  ngOnInit(): void {
    this.serviceHamburger.getHamburgers.subscribe(h => {
      this.hamburgers = h
    })
  }

  addOrder(h: hamburger) {
    this.serviceHamburger.addHamburger = h
  }



}
