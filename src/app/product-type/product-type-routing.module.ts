import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTypePage } from './product-type.page';

const routes: Routes = [
  {
    path: '',
    component: ProductTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductTypePageRoutingModule {}
