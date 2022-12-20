import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListHamburgerComponent } from './components/list-hamburger/list-hamburger.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { hamburgerReducer } from './components/ngrx/hamburger.reducer';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListHamburgerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot({ hamburger: hamburgerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
