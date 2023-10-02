import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mockGoods } from 'src/app/shared/constants/mock-data.const';
import { IGood } from 'src/app/shared/interfaces/good.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodListComponent {
  public goods: IGood[] = mockGoods

  constructor(private firestoreService: FirestoreService){
    this.firestoreService.getGoodsObserver()
  }
}
