import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCartProductImagesPage } from './create-cart-product-images.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCartProductImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCartProductImagesPageRoutingModule {}
