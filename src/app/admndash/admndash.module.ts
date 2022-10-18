import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmndashPageRoutingModule } from './admndash-routing.module';

import { AdmndashPage } from './admndash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmndashPageRoutingModule
  ],
  declarations: [AdmndashPage]
})
export class AdmndashPageModule {}
