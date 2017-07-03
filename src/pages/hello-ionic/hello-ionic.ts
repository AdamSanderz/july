import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ContactUsPage } from '../contact-us/contact-us';
import { AboutPage } from '../about/about';
import { ListPage } from '../list/list';
import { StoresListPage } from '../stores-list/stores-list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
  // styleUrls: 
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }


  ionViewWillEnter(){

  }


  goToContactUs(params) {
    if (!params) params = {};
    this.navCtrl.push(ContactUsPage);
  }


  goToAbout(params) {
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }

  goToCarService(params) {
    if (!params) params = {};
    this.navCtrl.push(ListPage);
  }

  
  goToStoresList(params) {
    if (!params) params = {};
    this.navCtrl.push(StoresListPage);
  }

  

}
