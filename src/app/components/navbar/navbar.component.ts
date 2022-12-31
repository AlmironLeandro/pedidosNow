import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { MatDialog } from '@angular/material/dialog';
import { SingInComponent } from '../sing-in-to-pedidosNow/sing-in.component';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() login?: boolean;
  public user: any


  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) {
    try {
      const auth = getAuth();
      this.user = auth.currentUser;
    } catch (error) {


    }
  }

  openDialogRegister() {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: '500px',
      
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
    this.userService.loguot().then(
      res => {
        this.userService.message('Se ha cerrado la sesión correctamente')
        this.router.navigate([`/login`])
      }

    ).catch(error => {
      alert(error)
    })

  }


}
