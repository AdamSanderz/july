import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { TitlesProvider } from '../../providers/titles/titles';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class ListPage {


    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;


    constructor(public navCtrl: NavController, public navParams: NavParams, public titles: TitlesProvider) {
        // this.loadPeople();
        this.searchControl = new FormControl();



    }

/*    filterItems(searchTerm) {
        return this.items.filter((item) => {
            return (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        })
    }*/


/*    loadPeople() {

        this.titles.loadList()
            .then(data => {
                this.items = data;
                console.log(this.items);

            });
    }*/






    ionViewDidLoad() {

        this.setFilteredItems();

        this.searchControl.valueChanges.debounceTime(500).subscribe(search => { this.searching = false;
            this.setFilteredItems();

        });
    }


    onSearchInput() {
        this.searching = true;
    }






    setFilteredItems() {
        this.items = this.titles.filterItems(this.searchTerm);
    }




    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }





}
