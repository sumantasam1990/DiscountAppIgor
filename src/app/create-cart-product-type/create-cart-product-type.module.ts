import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCartProductTypePageRoutingModule } from './create-cart-product-type-routing.module';

import { CreateCartProductTypePage } from './create-cart-product-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCartProductTypePageRoutingModule
  ],
  declarations: [CreateCartProductTypePage]
})
export class CreateCartProductTypePageModule {}
