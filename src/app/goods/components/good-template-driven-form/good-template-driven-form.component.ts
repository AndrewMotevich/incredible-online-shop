import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NO_IMAGE_QUERY } from 'src/app/shared/constants/no-image.const';
import { IGood } from 'src/app/shared/interfaces/good.interface';

@Component({
  selector: 'app-good-template-driven-form',
  templateUrl: './good-template-driven-form.component.html',
  styleUrls: ['./good-template-driven-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodTemplateDrivenFormComponent {
  public id: number | undefined;

  public good: Omit<IGood, 'id'> = {
    title: '',
    description: '',
    price: null,
    thumbnail: NO_IMAGE_QUERY,
  };

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  public handleImageUpload(base64Image: string) {
    this.good.thumbnail = base64Image;
    this.cdr.markForCheck();
  }

  public submit(ngForm: NgForm) {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched()
      ngForm.control.markAsDirty()
      return
    }
    console.log(this.good);
  }
}
