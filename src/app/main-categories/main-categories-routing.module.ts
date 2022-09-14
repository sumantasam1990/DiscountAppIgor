import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainCategoriesPage } from './main-categories.page';

const routes: Routes = [
  {
    path: '',
    component: MainCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainCategoriesPageRoutingModule {}
