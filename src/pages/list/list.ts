import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { TitlesProvider } from '../../providers/titles/titles';
// import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class ListPage {

    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public titles: TitlesProvider) {
        this.loadAllTheList();
        // this.searchControl = new FormControl();

        /*for (let i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }*/

    }

        /*doInfinite(infiniteScroll) {
            console.log('Begin async operation');
    
            setTimeout(() => {
                for (let i = 0; i < 30; i++) {
                    this.items.push(this.items.length);
                }
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }*/

    loadAllTheList() {
        this.titles.loadList()
            .then(results => {
                this.items = results;
                // console.log(this.items);
            })
    }
    ionViewDidLoad() { }

    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }


    getItems(ev) {

        // set val to the value of the ev target
        var val = ev.target.value;

        // Reset items back to all of the items
        if (val.trim() == '') {
            this.loadAllTheList();

        }


        // if the value is an empty string don't filter the items
        if (val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

}

