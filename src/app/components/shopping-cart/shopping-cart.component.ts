import { Component, OnInit } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable, isEmpty } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  data$: Observable<hamburger[]>
  total!: number
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
    this.data$.subscribe((h, l = 0) => h.map((data) => {
      l += data.valor
      this.total = l
    },
    ))

  }

  totalOrder() {



  }

  ngOnInit(): void {



  }

}
