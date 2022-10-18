import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfcdashPageRoutingModule } from './ofcdash-routing.module';

import { OfcdashPage } from './ofcdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfcdashPageRoutingModule
  ],
  declarations: [OfcdashPage]
})
export class OfcdashPageModule {}
