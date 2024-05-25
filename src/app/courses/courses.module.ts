import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoursesPageRoutingModule } from './courses-routing.module';
import { CoursesPage } from './courses.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule,
    MatTabsModule
  ],
  declarations: [CoursesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesPageModule {


}
