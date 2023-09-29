import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { mockGoods } from 'src/app/shared/constants/mock-data.const';

@Component({
  selector: 'app-good-details',
  templateUrl: './good-details.component.html',
  styleUrls: ['./good-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodDetailsComponent {
  public good = mockGoods[0]
  public id: number

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
