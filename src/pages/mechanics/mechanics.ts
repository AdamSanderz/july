import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { StoresProvider } from '../../providers/stores/stores';

/**
 * Generated class for the MechanicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mechanics',
  templateUrl: 'mechanics.html',
})
export class MechanicsPage {

  jsonData;
  selected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private selector: WheelSelector, public stores: StoresProvider) {
    this.allProvincesAndCities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicsPage');
  }


  /*    public event = {
      month: 'Tehran'
      // timeStarts: '07:43',
      // timeEnds: '1990-02-20'
    }
  */


  allProvincesAndCities() {
    this.stores.loadProvincesAndCitiesFromJSON().then(results => {
      this.jsonData = results;

    })
  }

  selectAProvince() {
    this.selector.show({
      title: "Province?",
      items: [
        this.jsonData.name
      ],
    }).then(
      result => {
        console.log(result[0].description + ' at index: ' + result[0].index);
      },
      err => console.log('Error: ', err)
      );
  }


}
