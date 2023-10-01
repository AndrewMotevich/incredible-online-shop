import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodCenterComponent } from './components/good-center/good-center.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { GoodDetailsComponent } from './components/good-details/good-details.component';
import { GoodTemplateDrivenFormComponent } from './components/good-template-driven-form/good-template-driven-form.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { ConvertImageToThumbnailDirective } from './directives/convert-to-thumbnail.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GoodCenterComponent,
    GoodListComponent,
    GoodDetailsComponent,
    GoodTemplateDrivenFormComponent,
    ConvertImageToThumbnailDirective,
  ],
  imports: [CommonModule, GoodsRoutingModule, FormsModule],
})
export class GoodsModule {}
