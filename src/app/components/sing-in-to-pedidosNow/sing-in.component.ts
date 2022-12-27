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
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})

export class SingInComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  accountSuccesses = false
  constructor(public dialogRef: MatDialogRef<SingInComponent>, private userService: UserService) { }

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(6)])

  ngOnInit(): void {

  }


  isGreater() {
    return this.password.value!.length < 6
  }



  onSubmit() {
    this.userService.login(this.email.value, this.password.value)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error)
        this.userService.message('La contraseña y/o el usuario son incorrectos')
      });
  }
}
