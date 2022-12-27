import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  constructor(public dialogRef: MatDialogRef<UserRegisterComponent>, private userService: UserService) { }

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(6)])
  rePassword = new FormControl('', [Validators.required, Validators.minLength(6)])

  ngOnInit(): void {

  }

  passwordMatch() {
    return this.password.value != this.rePassword.value
  }

  isGreater() {
    return this.password.value!.length < 6
  }



  onSubmit() {
    if (this.passwordMatch()) {
      this.userService.message('Las contraseñas tienen que coincidir')
    }
    else {
      this.userService.register({ email: this.email, password: this.password })
        .then(res => {
          this.dialogRef.close()
          this.userService.message('Usuario creado')

        })

        .catch(error => {
          this.userService.message(error + ' Posiblemente el correo que ingreso no exista'); console.log(error)
        });

    }


  }

}
