import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { MatDialog } from '@angular/material/dialog';
import { SingInComponent } from '../sing-in-to-pedidosNow/sing-in.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() login?: boolean;



  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) { }

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


  logout() {
    this.userService.loguot()
    this.userService.message('se ha cerrado la sesión correctamente')
    this.router.navigate([`/login`])
  }

}
