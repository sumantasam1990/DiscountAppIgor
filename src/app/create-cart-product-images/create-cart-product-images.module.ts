import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCartProductImagesPageRoutingModule } from './create-cart-product-images-routing.module';

import { CreateCartProductImagesPage } from './create-cart-product-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCartProductImagesPageRoutingModule
  ],
  declarations: [CreateCartProductImagesPage]
})
export class CreateCartProductImagesPageModule {}
