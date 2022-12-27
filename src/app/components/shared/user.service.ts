import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private _snackBar: MatSnackBar) { }

  message(m: string) {
    this._snackBar.open(m, "", {
      duration: 2000,
      panelClass: ['snackbar-success']
    },)
  }

  register(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password)

  }
}

