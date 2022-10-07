import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCartProductTypePage } from './create-cart-product-type.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCartProductTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCartProductTypePageRoutingModule {}
