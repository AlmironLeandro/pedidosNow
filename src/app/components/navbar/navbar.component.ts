import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() login?: boolean;
  formReg: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email,Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(8),Validators.required])),
    rePassword: new FormControl('', Validators.required)
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  passwordMatch()
  {
    return this.formReg.get('password')?.value != this.formReg.get('rePassword')?.value
  }

  onSubmit() {

    this.userService.register(this.formReg.value)
      .then( res => {
        console.log(res);
        
      })
      .catch(error => console.log(error));
      


  }


}
