import { Injectable, inject } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore = inject(Firestore);

  public getGoodsObserver() {
    const goodsCollection = collection(this.firestore, 'goods');
    onSnapshot(goodsCollection, {
      next: (res) => {
        res.docs.map(item => {console.log(item.data(), item.id)})
      },
    });
  }
}
