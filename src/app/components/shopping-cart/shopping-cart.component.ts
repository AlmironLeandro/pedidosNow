import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable, isEmpty } from 'rxjs'
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
    { field: 'nombre' },
    { field: 'valor' },
    {
      field: 'id',
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
        clicked: function (field: any) {
        },
      },
      maxWidth: 2
    }
  ];

  constructor(public hamburgerService: HamburgerService) {
    this.data$ = hamburgerService.orderCurrent
    this.data$.subscribe((h, l = 0) => h.map((data) => {
      l += data.valor;
      this.total = l;
    },
    ))

  }

  ngOnInit(): void {



  }

}
