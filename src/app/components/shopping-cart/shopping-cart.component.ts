import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable, } from 'rxjs'
import { AgGridAngular } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('myGrid') grid!: AgGridAngular;
  data$: Observable<hamburger[]>
  hamburgers!: hamburger[]
  total!: number

  columnDefs: ColDef[] = [
    { field: 'nombre',  flex:2,minWidth: 120,maxWidth: 150},
    { field: 'valor', flex:2,minWidth: 120,maxWidth: 200},
    {
      field: 'id',
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
        clicked: function (field: any) {
        },
      },
      
    }
  ];

  constructor(public hamburgerService: HamburgerService) {
    this.data$ = hamburgerService.orderCurrent
    this.data$.subscribe((h, l = 0) => h.map((data) => {
      l += data.price;
      this.total = l;
    },
    ))

  }

  ngOnInit(): void {



  }

}
