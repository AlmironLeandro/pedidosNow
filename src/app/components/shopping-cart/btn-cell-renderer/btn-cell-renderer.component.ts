import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { HamburgerService } from '../../shared/hamburger.service';

@Component({
  selector: 'app-btn-cell-renderer',
  template: `
  <i (click)="btnClickedHandler($event)" class="uil uil-trash-alt"></i>
`,
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {
  constructor(private serviceHamburger: HamburgerService){}
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    // console.log(this.params.value);
    
    this.serviceHamburger.removeHamburger(this.params.value)
  }

  refresh() {
    return false;
  }

}
