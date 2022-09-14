import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductTypePageRoutingModule } from './product-type-routing.module';

import { ProductTypePage } from './product-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductTypePageRoutingModule
  ],
  declarations: [ProductTypePage]
})
export class ProductTypePageModule {}
