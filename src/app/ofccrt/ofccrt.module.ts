import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfccrtPageRoutingModule } from './ofccrt-routing.module';

import { OfccrtPage } from './ofccrt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfccrtPageRoutingModule
  ],
  declarations: [OfccrtPage]
})
export class OfccrtPageModule {}
