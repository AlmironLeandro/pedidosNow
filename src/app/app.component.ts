import { Component, OnInit } from '@angular/core';
import { addDoc } from '@angular/fire/firestore';
import { collection, Firestore } from '@angular/fire/firestore';
import hamburger from './interfaces/hamburger.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pedidosNow';


  constructor(private firestore: Firestore) {
  }
  ngOnInit(): void {

  }
  addHamburgers(h: hamburger[]) {
    const hamburger = collection(this.firestore, 'hamburger');
    h.forEach(element => {
      return addDoc(hamburger, element)
    });
  }

  arrayHamburgers: hamburger[] = [

    {
      name: 'Doble cuarto de libra',
      ulrImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
      price: 30,
      description: '',
    },

    {
      name: 'La coronita',
      ulrImg: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      price: 20,
      description: ''
    },

    {
      name: 'La magnifica',
      ulrImg: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 23,
      description: ''
    },

    {
      name: 'La simple',
      ulrImg: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      price: 15,
      description: ''
    },
    {
      name: 'Mutante Sm',
      ulrImg: 'https://plus.unsplash.com/premium_photo-1667682209368-2e3629cceaa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 25,
      description: ''
    },
    {
      name: 'A caballo',
      ulrImg: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80',
      price: 30,
      description: ''
    }
    ,
    {
      name: 'La gourmet',
      ulrImg: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 32,
      description: ''
    }
    ,
    {
      name: 'Mutante XL',
      ulrImg: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
      price: 35,
      description: ''
    }
    ,
    {
      name: 'Triple tentacion',
      ulrImg: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
      price: 38,
      description: ''
    }
    ,
    {
      name: 'Arabe con pan de campo',
      ulrImg: 'https://images.unsplash.com/photo-1542545256-84d8b442b26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      price: 28,
      description: ''
    }
  ]





}