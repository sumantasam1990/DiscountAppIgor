import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicprofilePage } from './publicprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PublicprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicprofilePageRoutingModule {}
