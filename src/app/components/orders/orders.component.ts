import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import productCarts from 'src/app/interfaces/order.interface';
import { HamburgerService } from '../shared/hamburger.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  public login: boolean = false
  public orders: productCarts[] = []
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(private hamburgerService: HamburgerService) {
    this.loadOrder()
  }

  async loadOrder() {
    (await this.hamburgerService.getDoc('carrito'))
      .subscribe(
        (e: any) => {
          e.map((p: any) => {
            if (p.product_id === this.hamburgerService.getUid()) {
              this.orders.push(p)
            }
          }
          )
        }
      )
  }
}
