import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the TitlesProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TitlesProvider {

    constructor(public http: Http) {
        console.log('Hello TitlesProvider Provider');
    }

    data: {};
    titles: string[];
    items;

    load() {

        return new Promise(resolve => {
            this.http.get('../assets/json/wikievent.json')
            // this.http.get('http://www.wikievent.net/index.php/api/Wikievent/events/page/0/rows/10')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data.events;

                    resolve(this.data);

                });
        });
    }


}
