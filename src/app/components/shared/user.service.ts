import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, doc, setDoc, getDoc, Firestore, collectionData } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import client from 'src/app/interfaces/user.interface';
import { Observable, BehaviorSubject } from 'rxjs'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import productCarts from 'src/app/interfaces/order.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public client?: client;

  constructor(private auth: Auth, private _snackBar: MatSnackBar, private firestore: Firestore, private fire: AngularFirestore) {

  }
  loadClient(uid: string) {
    this.getClient()
      .subscribe((res) => res.filter((u: client) => {
        if (uid === u.userId) { this.client = u }
      })
      )

  }

 


  async createCollection(collection: any, data: any) {
    return await this.fire.collection(collection).add(data)
  }

  getClient(): Observable<client[]> {
    const clientRef = collection(this.firestore, 'usuarios')
    return collectionData(clientRef, { idField: 'id' }) as Observable<client[]>
  }

  message(m: string) {
    this._snackBar.open(m, "", {
      duration: 4000,
      panelClass: ['snackbar-success']
    },)
  }

  register(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login(email: any, password: any) {

    return signInWithEmailAndPassword(this.auth, email, password)

  }

  loguot() {

    return signOut(this.auth);
  }
}

