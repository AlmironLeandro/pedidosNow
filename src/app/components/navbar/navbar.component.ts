import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { MatDialog } from '@angular/material/dialog';
import { SingInComponent } from '../sing-in-to-pedidosNow/sing-in.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() login?: boolean;



  constructor(public dialog: MatDialog) { }

  openDialogRegister() {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: '500px'
    }
    )
  }

  openDialogSingIn() {
    const dialogRef = this.dialog.open(SingInComponent, {
      width: '500px'
    }
    )
  }

  ngOnInit(): void {

  }




}
