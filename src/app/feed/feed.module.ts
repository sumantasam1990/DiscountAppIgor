import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed.component';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,

  ],

  exports: [FeedComponent]
})
export class FeedModule { }
