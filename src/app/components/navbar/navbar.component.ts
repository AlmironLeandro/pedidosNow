import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() login?: boolean;
 
 
  
  constructor(public dialog: MatDialog) { }

  openDialog() {
   const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: '500px'}
    )
  }

  ngOnInit(): void {

  }




}
