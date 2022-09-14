import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelTwoPageRoutingModule } from './level-two-routing.module';

import { LevelTwoPage } from './level-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelTwoPageRoutingModule
  ],
  declarations: [LevelTwoPage]
})
export class LevelTwoPageModule {}
