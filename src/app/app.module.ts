import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListHamburgerComponent } from './components/list-hamburger/list-hamburger.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { hamburgerReducer } from './components/ngrx/hamburger.reducer';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListHamburgerComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // StoreModule.forRoot({ hamburger: hamburgerReducer }),
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
