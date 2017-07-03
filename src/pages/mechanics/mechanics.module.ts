import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MechanicsPage } from './mechanics';

@NgModule({
  declarations: [
    MechanicsPage,
  ],
  imports: [
    IonicPageModule.forChild(MechanicsPage),
  ],
  exports: [
    MechanicsPage
  ]
})
export class MechanicsPageModule {}
