import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { HamburgerService } from '../../shared/hamburger.service';
import { HamburgersPageActions } from '../../state';

@Component({
  selector: 'app-btn-cell-renderer',
  template: `
  <i (click)="btnClickedHandler($event)" class="uil uil-trash-alt"></i>
`,
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {
  constructor(private serviceHamburger: HamburgerService, private store: Store) { }
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    this.store.dispatch(HamburgersPageActions.removeProduct({ idData: this.params.value }))
  }

  refresh() {
    return false;
  }

}
