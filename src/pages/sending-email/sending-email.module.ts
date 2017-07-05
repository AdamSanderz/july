import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendingEmailPage } from './sending-email';

@NgModule({
  declarations: [
    SendingEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SendingEmailPage),
  ],
  exports: [
    SendingEmailPage
  ]
})
export class SendingEmailPageModule {}
