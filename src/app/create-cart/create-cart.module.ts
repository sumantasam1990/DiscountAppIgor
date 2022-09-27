import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCartPageRoutingModule } from './create-cart-routing.module';

import { CreateCartPage } from './create-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCartPageRoutingModule
  ],
  declarations: [CreateCartPage]
})
export class CreateCartPageModule {}
