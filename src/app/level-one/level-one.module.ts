import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LevelOneComponent } from './level-one.component';



@NgModule({
  declarations: [LevelOneComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,

  ],
  exports: [LevelOneComponent]
})
export class LevelOneModule { }
