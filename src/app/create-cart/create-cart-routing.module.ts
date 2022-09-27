import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCartPage } from './create-cart.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCartPageRoutingModule {}
