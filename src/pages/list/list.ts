import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {TitlesProvider} from '../../providers/titles/titles';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    items;
    // topics: Array<string> = [];
    // topics = new Array;
    // allItems = new Array;
    result = new Array();
    theTitles = new Array();
    constructor(public navCtrl: NavController, public navParams: NavParams, public titles: TitlesProvider) {
        this.loadPeople();
        this.initializeTitles();

    }


    loadPeople() {
        // this.allItems = [];
        // this.topics = [];
        this.titles.load()
        .then(data => {
            this.items = data;
            // console.log(this.items);
            for (let item in this.items) {
                let arr = new Array();
                for (let key in this.items[item]){
                    arr.push(this.items[item][key])
                }
                this.result.push(arr);
                // this.topics.push(item.title);
                // this.allItems = this.items[item].title;
                // console.log(this.allItems);
            }


            // console.log(this.topics.length);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BasicPage');
    }


    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }

    initializeTitles(){
        // this.theTitles = [];

        for(let i in this.result){
            console.log(this.result[i][2]);
            this.result[i][2] = this.theTitles;
            // console.log(this.theTitles);
        }
    }


    getItems(ev) {

        // set val to the value of the ev target
        let val = ev.target.value;

        // Reset items back to all of the items
        if (val.trim() == ''){
            this.initializeTitles();
        }

        // if the value is an empty string don't filter the items
        if (val.trim() != '') {
            console.log(val.trim())
            this.theTitles = this.theTitles.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }

    }


}
