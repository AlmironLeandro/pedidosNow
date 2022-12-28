import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import hamburger from 'src/app/interfaces/hamburger.interface';
import { Observable, BehaviorSubject } from 'rxjs'
// import {user} from 'src/app/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private sharingObservablePrivate$: BehaviorSubject<Array<hamburger>> = new BehaviorSubject<Array<hamburger>>([])
  constructor(private firestore: Firestore) { }

  get orderCurrent() {
    return this.sharingObservablePrivate$.asObservable()
  }

  set addHamburger(h: hamburger) {
    const currentValue = this.sharingObservablePrivate$.value
    const updatevalue = [...currentValue, h]
    this.sharingObservablePrivate$.next(updatevalue)
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
