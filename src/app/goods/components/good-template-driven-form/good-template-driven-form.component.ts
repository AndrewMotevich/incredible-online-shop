import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-good-template-driven-form',
  templateUrl: './good-template-driven-form.component.html',
  styleUrls: ['./good-template-driven-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodTemplateDrivenFormComponent {
  public id: number
  public thumbnailUrl: string = '';

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  public handleImageUpload(base64Image: string) {
    this.thumbnailUrl = base64Image;
    this.cdr.markForCheck()
  }

}
