import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

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

export class SingInComponent  {
  matcher = new MyErrorStateMatcher();
  options: FormlyFormOptions = {};
  form = new FormGroup({});
  public model = { email: '', contraseña: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'Ingresar mail',
        required: true,
      },
    },
    {
      key: 'contraseña',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      props: {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresar contraseña',
        required: true,
      }
    },
  ]

  constructor(public dialogRef: MatDialogRef<SingInComponent>, private userService: UserService, private router: Router) { }


  isGreater() {
    return this.model.contraseña!.length < 6
  }

  onSubmit() {
    this.userService.login(this.model.email, this.model.contraseña)
      .then(res => {
        this.userService.message('Inicio de sesíon correctamente')
        this.dialogRef.close()
        this.router.navigate([`/main`])
      })
      .catch(error => {
        this.userService.message('La contraseña y/o el correo son incorrectos')
      });
  }
}
