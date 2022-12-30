import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import client from 'src/app/interfaces/user.interface';




/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  accountSuccesses = false
  constructor(public dialogRef: MatDialogRef<UserRegisterComponent>, private userService: UserService, private firestore: Firestore) { }

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(6)])
  rePassword = new FormControl('', [Validators.required, Validators.minLength(6)])

  ngOnInit(): void {

  }


  createUserOnCollection(client: client) {
    const clientRef = collection(this.firestore, 'usuarios');

    return addDoc(clientRef, client)
  }

  passwordMatch() {
    return this.password.value === this.rePassword.value
  }

  isGreater() {
    return this.password.value!.length < 6
  }



  onSubmit() {
    if (!this.passwordMatch()) {
      this.userService.message('Las contraseñas tienen que coincidir')
    }
    else {
      this.userService.register(this.email.value, this.password.value)
        .then(res => {
          this.dialogRef.close()
          const client: client = {
            userId: res.user.uid,
          }
          this.userService.createCollection('usuarios', client)
          this.userService.message('Usuario registrado')

        })

        .catch(error => {
          this.userService.message(error + ' Posiblemente el correo que ingreso no exista'); console.log(error)
        });

    }


  }

}
