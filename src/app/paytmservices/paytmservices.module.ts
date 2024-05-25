import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaytmservicesPageRoutingModule } from './paytmservices-routing.module';

import { PaytmservicesPage } from './paytmservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaytmservicesPageRoutingModule
  ],
  declarations: [PaytmservicesPage]
})
export class PaytmservicesPageModule {}
