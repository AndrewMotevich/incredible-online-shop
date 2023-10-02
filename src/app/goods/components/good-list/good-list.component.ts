import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { GOOD_CREATE_PATH, GOOD_DETAILS_PATH } from 'src/app/shared/constants/path.const';
import { IGood } from 'src/app/shared/interfaces/good.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodListComponent {
  private unsubscribe$ = new Subject<void>();

  public goods: IGood[];

  public readonly detailsPath = GOOD_DETAILS_PATH.fullPath;
  public readonly createPath = GOOD_CREATE_PATH.fullPath;

  constructor(
    private firestoreService: FirestoreService,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit() {
    this.firestoreService.goodsObserver.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      this.goods = res;
      this.cdr.detectChanges();
    });
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
