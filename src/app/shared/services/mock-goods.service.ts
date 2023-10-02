import { Injectable } from '@angular/core';
import { mockGoods } from '../constants/mock-data.const';
import { IGood } from '../interfaces/good.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockGoodsService {
  private goods: IGood[] = mockGoods;

  public get goodsObserver() {
    return new BehaviorSubject<IGood[]>(this.goods);
  }

  public getGoodById(id: string): Promise<IGood> {
    return new Promise(() => this.goods.find((item) => item.id === id));
  }

  public addGood(good: Omit<IGood, 'id'>): Promise<unknown> {
    this.goods.push({ id: Date.now().toString(), ...good });
    return new Promise(()=>{})
  }

  public deleteGood(id: string): Promise<unknown> {
    this.goods = this.goods.filter((good) => good.id != id);
    this.goodsObserver.next(this.goods);
    return new Promise(()=>{})
  }

  public updateGood(id: string, good: IGood): Promise<unknown> {
    const goodIndex = this.goods.findIndex((item) => item.id === id);
    this.goods[goodIndex] = good;
    this.goodsObserver.next(this.goods);
    return new Promise(()=>{})
  }
}
