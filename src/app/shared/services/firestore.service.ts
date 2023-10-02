import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

import GOODS_QUERY_STRING from '../constants/firestore.consts';
import { IGood } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore = inject(Firestore);
  private goodsSubject$ = new BehaviorSubject<IGood[]>([]);

  constructor() {
    const goodsCollection = collection(this.firestore, GOODS_QUERY_STRING);
    onSnapshot(goodsCollection, {
      next: (res) => {
        const goods = res.docs.map((item) => ({
          ...(item.data() as Omit<IGood, 'id'>),
          id: item.id,
        }));
        this.goodsSubject$.next(goods);
      },
    });
  }

  public get goodsObserver(): Observable<IGood[]> {
    return this.goodsSubject$.asObservable();
  }

  public async getGoodById(id: string): Promise<IGood> {
    return (await getDoc(doc(this.firestore, `${GOODS_QUERY_STRING}/${id}`))).data() as IGood;
  }

  public addGood(good: Omit<IGood, 'id'>): Promise<unknown> {
    return addDoc(collection(this.firestore, GOODS_QUERY_STRING), good);
  }

  public deleteGood(id: string): Promise<unknown> {
    return deleteDoc(doc(this.firestore, GOODS_QUERY_STRING, id));
  }

  public updateGood(id: string, good: Partial<IGood>): Promise<unknown> {
    return updateDoc(doc(this.firestore, `${GOODS_QUERY_STRING}/${id}`), good);
  }
}
