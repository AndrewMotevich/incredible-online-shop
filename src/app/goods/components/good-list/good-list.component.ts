import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodListComponent {

}
