import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaytmservicesPage } from './paytmservices.page';

const routes: Routes = [
  {
    path: '',
    component: PaytmservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaytmservicesPageRoutingModule {}
