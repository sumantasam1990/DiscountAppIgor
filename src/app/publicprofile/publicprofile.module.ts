import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicprofilePageRoutingModule } from './publicprofile-routing.module';

import { PublicprofilePage } from './publicprofile.page';
import {CartFollowComponent} from '../components/cart-follow/cart-follow.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicprofilePageRoutingModule,
  ],
  declarations: [PublicprofilePage, CartFollowComponent]
})
export class PublicprofilePageModule {}
