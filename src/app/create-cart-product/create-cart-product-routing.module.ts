import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCartProductPage } from './create-cart-product.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCartProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCartProductPageRoutingModule {}
