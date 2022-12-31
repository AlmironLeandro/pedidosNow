import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import client from 'src/app/interfaces/user.interface';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';



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

export class UserRegisterComponent  {
  matcher = new MyErrorStateMatcher();
  options: FormlyFormOptions = {};
  form = new FormGroup({});
  public model = { email: '', contraseña: '', confirmacion: '' };
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
    {
      key: 'confirmacion',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      props: {
        type: 'password',
        label: 'Confirmación de contraseña',
        placeholder: 'Ingresar la contraseña nuevamente',
        required: true,
      }
    }
  ]

  accountSuccesses = false
  constructor(public dialogRef: MatDialogRef<UserRegisterComponent>, private userService: UserService, private firestore: Firestore) { }
  createUserOnCollection(client: client) {
    const clientRef = collection(this.firestore, 'usuarios');
    return addDoc(clientRef, client)
  }

  passwordMatch() {
    return this.model.contraseña === this.model.confirmacion
  }

  isHigher() {
    return this.model.contraseña.length < 6
  }



  onSubmit() {
    if (!this.passwordMatch()) {
      this.userService.message('Las contraseñas tienen que coincidir')
    }
    else {
      this.userService.register(this.model.email, this.model.contraseña)
        .then(res => {
          this.dialogRef.close()
          const client: client = {
            userId: res.user.uid,
          }
          this.userService.createCollection('usuarios', client)
          this.userService.message('Usuario registrado')

        })

        .catch(error => {
          this.userService.message(error + 'Posiblemente el correo que ingreso no exista'); console.log(error)
        });

    }


  }

}
