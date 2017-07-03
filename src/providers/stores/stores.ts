import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StoresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StoresProvider {

    data: {};
    provinces;

    constructor(public http: Http) {
        console.log('Hello StoresProvider Provider');


    }


    load() {

        return new Promise(resolve => {
            // this.http.get('http://www.wikievent.net/index.php/api/Wikievent/get_audience_list/event_id/4114/date/1495672200/cycle/cycle1')
            this.http.get('../../assets/json/audience_list.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data.result;
                    resolve(this.data);
                    console.log(data);
                });
        });
    }


    loadProvincesAndCitiesFromJSON() {

        return new Promise(resolve => {
            this.http.get('../../assets/json/province.json')
                .map(res => res.json())
                .subscribe(results => {
                    this.provinces = results;
                    resolve(this.provinces);
                });
        });
    }




}
