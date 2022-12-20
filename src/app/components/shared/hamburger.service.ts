import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { Observable } from 'rxjs'
import order from 'src/app/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {

  constructor(private firestore: Firestore) { }
  // hamburgers$!: Observable<hamburger[]>
  addOrder(order: order) {
    const orderRef = collection(this.firestore, 'order');
    return addDoc(orderRef, order)
  }

  getHamburgers(): Observable<hamburger[]> {
    const hamburgerRef = collection(this.firestore, 'hamburger');
    return collectionData(hamburgerRef, { idField: 'id' }) as Observable<hamburger[]>
  }
}
