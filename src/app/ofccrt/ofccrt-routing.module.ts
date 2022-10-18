import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfccrtPage } from './ofccrt.page';

const routes: Routes = [
  {
    path: '',
    component: OfccrtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfccrtPageRoutingModule {}
