import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoresListDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stores-list-details',
  templateUrl: 'stores-list-details.html',
})
export class StoresListDetailsPage {
	selectedItem: any;
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresListDetailsPage');
  }



}
