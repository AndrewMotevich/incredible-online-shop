import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as PATHS from './shared/constants/path.const';

const routes: Routes = [
  {
    path: PATHS.ROOT_PATH.path,
    loadChildren: () => import('./goods/goods.module').then((m) => m.GoodsModule)
  },
  { path: '**', redirectTo: PATHS.ROOT_PATH.path, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
