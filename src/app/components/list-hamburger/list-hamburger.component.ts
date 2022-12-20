import { Component, OnInit } from '@angular/core';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';


@Component({
  selector: 'app-list-hamburger',
  templateUrl: './list-hamburger.component.html',
  styleUrls: ['./list-hamburger.component.scss']
})
export class ListHamburgerComponent implements OnInit {

  hamburgers!: hamburger[]
  constructor(private serviceHamburger: HamburgerService) { }

  ngOnInit(): void {
    this.serviceHamburger.getHamburgers().subscribe(h => {
      this.hamburgers = h
    })    
  }



}
