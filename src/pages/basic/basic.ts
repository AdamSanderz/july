import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  items;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
    
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage');
  }

  initializeItems() {
    this.items = [
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
      'ایران',
      'تهران',
      'یزد',
      'شیراز',
      'تبریز',
      'آلمان',
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
