import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresListDetailsPage } from './stores-list-details';

@NgModule({
  declarations: [
    StoresListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresListDetailsPage),
  ],
  exports: [
    StoresListDetailsPage
  ]
})
export class StoresListDetailsPageModule {}
