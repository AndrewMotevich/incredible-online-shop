import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { mockGoods } from 'src/app/shared/constants/mock-data.const';
import { IGood } from 'src/app/shared/interfaces/good.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { GOOD_EDIT_PATH, ROOT_PATH } from '../../../shared/constants/path.const';

@Component({
  selector: 'app-good-details',
  templateUrl: './good-details.component.html',
  styleUrls: ['./good-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodDetailsComponent implements OnInit {
  public good: IGood;
  public id: string;

  public readonly editPath = GOOD_EDIT_PATH.fullPath;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private cdr: ChangeDetectorRef,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  public ngOnInit(): void {
    this.firestoreService.getGoodById(this.id).then((res) => {
      this.good = res;
      this.cdr.markForCheck();
    });
  }

  public deleteGood(id: string): void {
    this.firestoreService.deleteGood(id);
    this.router.navigate([ROOT_PATH.path]);
  }
}
