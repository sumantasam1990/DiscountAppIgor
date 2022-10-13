import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {UnpublishedCartComponent} from '../components/unpublished-cart/unpublished-cart.component';
import {SaveCartsComponent} from '../components/save-carts/save-carts.component';
import {CartFollowComponent} from '../components/cart-follow/cart-follow.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, UnpublishedCartComponent, SaveCartsComponent, CartFollowComponent]
})
export class Tab2PageModule {}
