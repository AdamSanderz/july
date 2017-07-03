import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {StoresListDetailsPage} from '../stores-list-details/stores-list-details';
import {StoresProvider} from '../../providers/stores/stores';

/**
 * Generated class for the StoresListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stores-list',
  templateUrl: 'stores-list.html',
})
export class StoresListPage {

    items;


  constructor(public navCtrl: NavController, public navParams: NavParams, public stores: StoresProvider) {
    this.loadStores();
  }
  



    loadStores() {
        this.stores.load()
            .then(data => {
                this.items = data;
            });
            console.log(this.items);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BasicPage');
    }


    itemTapped(event, item) {
        this.navCtrl.push(StoresListDetailsPage, {
            item: item
        });
    }

}
