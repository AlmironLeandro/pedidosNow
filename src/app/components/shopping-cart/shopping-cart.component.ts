import { Component, OnInit } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable, isEmpty } from 'rxjs'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  data$: Observable<hamburger[]>
  // h: hamburger = {
  //   nombre: '',
  //   ulrImg: '',
  //   valor: 0,
  // }

  columnDefs: ColDef[] = [
    { field: 'nombre' },
    { field: 'valor' },
    // { field: 'Total' }
  ];

  


  constructor(public hamburgerService: HamburgerService) {
    this.data$ = hamburgerService.orderCurrent


  }

  ngOnInit(): void {



  }

}
