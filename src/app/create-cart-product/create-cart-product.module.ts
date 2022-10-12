import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCartProductPageRoutingModule } from './create-cart-product-routing.module';

import { CreateCartProductPage } from './create-cart-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCartProductPageRoutingModule
  ],
  declarations: [CreateCartProductPage]
})
export class CreateCartProductPageModule {}
