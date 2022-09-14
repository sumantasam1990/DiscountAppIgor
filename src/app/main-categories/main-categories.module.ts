import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainCategoriesPageRoutingModule } from './main-categories-routing.module';

import { MainCategoriesPage } from './main-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainCategoriesPageRoutingModule
  ],
  declarations: [MainCategoriesPage]
})
export class MainCategoriesPageModule {}
