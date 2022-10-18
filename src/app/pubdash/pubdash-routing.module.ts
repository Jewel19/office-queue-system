import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubdashPage } from './pubdash.page';

const routes: Routes = [
  {
    path: '',
    component: PubdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubdashPageRoutingModule {}
