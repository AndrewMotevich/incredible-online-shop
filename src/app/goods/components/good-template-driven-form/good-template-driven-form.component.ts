import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_IMAGE_QUERY } from 'src/app/shared/constants/no-image.const';
import { ROOT_PATH } from 'src/app/shared/constants/path.const';
import { IGood } from 'src/app/shared/interfaces/good.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-good-template-driven-form',
  templateUrl: './good-template-driven-form.component.html',
  styleUrls: ['./good-template-driven-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodTemplateDrivenFormComponent implements OnInit {
  public id: string;

  public good: Omit<IGood, 'id'> = {
    title: '',
    description: '',
    price: null,
    thumbnail: NO_IMAGE_QUERY,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.firestoreService.getGoodById(this.id).then((res) => {
        this.good = res;
        this.cdr.markForCheck();
      });
    }
  }

  public handleImageUpload(base64Image: string) {
    this.good.thumbnail = base64Image;
    this.cdr.detectChanges();
  }

  public submit(ngForm: NgForm) {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched();
      ngForm.control.markAsDirty();
      return;
    }

    if (this.id) {
      this.firestoreService.updateGood(this.id, this.good);
    } else {
      this.firestoreService.addGood(this.good);
    }
    this.router.navigate([ROOT_PATH.path]);
  }
}
