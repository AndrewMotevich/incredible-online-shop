import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodCenterComponent } from './componets/good-center/good-center.component';
import { GoodListComponent } from './componets/good-list/good-list.component';
import { GoodDetailsComponent } from './componets/good-details/good-details.component';
import { GoodTemplateDrivenFormComponent } from './componets/good-template-driven-form/good-template-driven-form.component';
import { GoodsRoutingModule } from './goods-routing.module';

@NgModule({
  declarations: [
    GoodCenterComponent,
    GoodListComponent,
    GoodDetailsComponent,
    GoodTemplateDrivenFormComponent,
  ],
  imports: [CommonModule, GoodsRoutingModule],
})
export class GoodsModule {}
