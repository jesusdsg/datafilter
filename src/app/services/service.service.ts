import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore: AngularFirestore) { }


  getServices(): Observable<any[]> {
    return this.firestore.collection('services', ref => ref.orderBy('CardName', 'asc').limit(100)).snapshotChanges();
  }

}
