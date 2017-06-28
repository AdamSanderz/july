import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TitlesProvider {

    items: any;
    data: any;

    constructor(public http: Http) {

    }

    loadList() {
        return new Promise(resolve => {
            this.http.get('../assets/json/wikievent.json')
                // this.http.get('http://www.wikievent.net/index.php/api/Wikievent/events/page/0/rows/10')
                .map(res => res.json())
                .subscribe(results => {
                    this.data = results.events;
                    resolve(this.data);

                    for (var key in this.data) {
                        if (this.data.hasOwnProperty(key)) {
                            var element = this.data[key]
                            // console.log(element);

                        }
                    }
                    element = this.data;
                    // console.log(element)
                    // console.log(this.data)
                })
        });


    }




}
