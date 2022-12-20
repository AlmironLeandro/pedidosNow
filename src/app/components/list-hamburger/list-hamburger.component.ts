import { Component, OnInit } from '@angular/core';
import { collection, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import hamburger from 'src/app/interfaces/hamburger.interface';

@Component({
  selector: 'app-list-hamburger',
  templateUrl: './list-hamburger.component.html',
  styleUrls: ['./list-hamburger.component.scss']
})
export class ListHamburgerComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.getHamburgers();
  }

  getHamburgers() {
    const hamburgerRef = collection(this.firestore, 'hamburger');
    const res = collectionData(hamburgerRef, { idField: 'id' }) 
    res.pipe().forEach(a => console.log(a));
    
  }

}
