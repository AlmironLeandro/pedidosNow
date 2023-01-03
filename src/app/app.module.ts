//Other imports
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AgGridModule } from 'ag-grid-angular';

//Library formly
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

//Api-platform firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'


//Components
import { AppComponent } from './app.component';
import { BtnCellRendererComponent } from './components/shopping-cart/btn-cell-renderer/btn-cell-renderer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListHamburgerComponent } from './components/list-hamburger/list-hamburger.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { SingInComponent } from './components/sing-in-to-pedidosNow/sing-in.component'

//Import from Material ui Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrdersComponent } from './components/orders/orders.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FormlyHorizontalWrapper } from './components/user-register/horizontal-wrapper';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HamburgerEffects } from './components/state';
import { hamburgersReducer, HamburgersStateFeatureKey } from './components/state/hamburger.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListHamburgerComponent,
    ShoppingCartComponent,
    BtnCellRendererComponent,
    LoginComponent,
    UserRegisterComponent,
    SingInComponent,
    OrdersComponent,
    FormlyHorizontalWrapper



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AgGridModule,
    provideAuth(() => getAuth()),
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
      validationMessages: [{ name: 'required', message: 'Este campo es requerido' }],
    }),
    FormlyBootstrapModule,
    StoreModule.forRoot({
      hamburgersState: hamburgersReducer
    }),
    StoreModule.forFeature(HamburgersStateFeatureKey, hamburgersReducer),
    EffectsModule.forRoot([HamburgerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
