import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { HamburgerService } from '../shared/hamburger.service';
import { Observable, } from 'rxjs'
import { AgGridAngular } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { UserService } from '../shared/user.service';

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
    { field: 'name', flex: 2, minWidth: 120, maxWidth: 150 },
    { field: 'price', flex: 2, minWidth: 120, maxWidth: 200 },
    {
      field: 'id',
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
        clicked: function (field: any) {
        },
      },

    }
  ];

  constructor(private hamburgerService: HamburgerService, private userService: UserService) {
    this.data$ = hamburgerService.orderCurrent
    this.data$.subscribe((h, l = 0) => h.map((data) => {
      l += data.price;
      this.total = l;
    },
      this.data$.subscribe((h) => this.hamburgers = h)
    ))

  }

  ngOnInit(): void {
  }

  addOrder() {
    this.hamburgerService.createOrder(this.hamburgers)
      .then((res) => {
        this.userService.message('Su pedido se ha realizado con exito!')
        this.hamburgerService.cleanCart()
        alert('Puede ver el estado de su pedido haciendo click en su usuario')
      }
      )
      .catch(error => console.log(error)
      )
  }

}
