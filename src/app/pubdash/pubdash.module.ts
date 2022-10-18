import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubdashPageRoutingModule } from './pubdash-routing.module';

import { PubdashPage } from './pubdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubdashPageRoutingModule
  ],
  declarations: [PubdashPage]
})
export class PubdashPageModule {}
