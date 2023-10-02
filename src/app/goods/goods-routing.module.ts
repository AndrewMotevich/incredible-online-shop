import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as PATHS from '../shared/constants/path.const';
import { GoodCenterComponent } from './components/good-center/good-center.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { GoodDetailsComponent } from './components/good-details/good-details.component';
import { GoodTemplateDrivenFormComponent } from './components/good-template-driven-form/good-template-driven-form.component';

const routes: Routes = [
  { path: '', redirectTo: PATHS.GOOD_LIST_PATH.path, pathMatch: 'full' },
  {
    path: PATHS.ROOT_PATH.path,
    component: GoodCenterComponent,
    children: [
      { path: PATHS.GOOD_LIST_PATH.path, component: GoodListComponent },
      {
        path: PATHS.GOOD_DETAILS_PATH.path + PATHS.ID_PATH.fullPath,
        component: GoodDetailsComponent,
      },
      { path: PATHS.GOOD_CREATE_PATH.path, component: GoodTemplateDrivenFormComponent },
      {
        path: PATHS.GOOD_EDIT_PATH.path + PATHS.ID_PATH.fullPath,
        component: GoodTemplateDrivenFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
