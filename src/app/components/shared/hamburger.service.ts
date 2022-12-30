import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { getAuth } from "firebase/auth";
import { Observable, BehaviorSubject } from 'rxjs'
import client from 'src/app/interfaces/user.interface';
import productCarts from 'src/app/interfaces/order.interface';
import { Auth } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';



// import {user} from 'src/app/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private sharingObservablePrivate$: BehaviorSubject<Array<hamburger>> = new BehaviorSubject<Array<hamburger>>([])
  private users!: client[]
  constructor(private firestore: Firestore, private auth: Auth, private fire: AngularFirestore) {

    this.getUsers()
      .subscribe((u) => {
        this.users = u.filter((current) =>
          current.userId == this.getUid())
      })
    // setTimeout(() => {
    //   this.get().subscribe((r) => console.log(r)
    //   )

    // }, 2000);






  }

  // async createOrder(hamburgers: hamburger[]) {
  //   const id = 'H5hNgq4BmqGF9Yv8qQKw'
  //  
  // }

  async createOrder(products: hamburger[]) {
    console.log(products);

    let productCarts: productCarts =
    {
      quantity: products,

      status: 'pending',
      product_id: this.users[0].id
    }
    console.log(productCarts);

    // const path = 'usuarios/' + this.users[0].id + '/' + 'carrito/'
    const path = 'carrito/'
    const id = this.users[0].id as string
    console.log(id);

    return await this.createDoc(productCarts, path, id)
  }


  createDoc(data: any, path: string, id: string) {
    const collection = this.fire.collection(path)
    return collection.add(data)
    // return collection.doc(id).set(data)
  }
  // const product = doc(this.firestore, 'productCarts');
  // const path = 'usuarios'+ '/' + 

  // const res = documentSnapshot
  // return doc(this.firestore, 'usuarios/' + id + '/')



  // get() {
  //   const çlients = collection(this.firestore, `usuarios/${this.users[0].id}`);
  //   return collectionData(çlients) as Observable<client[]>
  // }

  getUsers(): Observable<client[]> {
    const clients = collection(this.firestore, 'usuarios');
    return collectionData(clients, { idField: 'id' }) as Observable<client[]>
    // getDoc()
  }

  getUid(): string {
    const auth = getAuth();
    return auth.currentUser?.uid as string

  }

  get orderCurrent() {
    return this.sharingObservablePrivate$.asObservable()
  }

  set addHamburger(h: hamburger) {
    const currentValue = this.sharingObservablePrivate$.value
    const updatevalue = [...currentValue, h]
    this.sharingObservablePrivate$.next(updatevalue)
  }

   cleanCart() {
    let currentValue = this.sharingObservablePrivate$.value
    currentValue = []
    this.sharingObservablePrivate$.next(currentValue)
  }

  removeHamburger(idData: string) {
    //I needed code fast, this logic doesn't work in the real world
    const currentItems = this.sharingObservablePrivate$.getValue();
    const itemsWithoutDeleted = currentItems.filter((ha) => {
      if (ha.id !== idData) {
        return ha
      }
      else {
        idData = ''
        return
      }
    });
    this.sharingObservablePrivate$.next(itemsWithoutDeleted);
  }

  // addFinishedOrder(order: order) {
  //   const orderRef = collection(this.firestore, 'order');
  //   return addDoc(orderRef, order)
  // }

  get getHamburgers(): Observable<hamburger[]> {
    const hamburgerRef = collection(this.firestore, 'hamburger');
    return collectionData(hamburgerRef, { idField: 'id' }) as Observable<hamburger[]>
  }
}
