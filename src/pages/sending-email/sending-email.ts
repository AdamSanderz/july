import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the SendingEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-sending-email',
 	templateUrl: 'sending-email.html',
 })
 export class SendingEmailPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SendingEmailPage');


/* 		let body = {
 			name: "Mohamad",
 			mobile: "123",
 			message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci similique asperiores nisi suscipit, ut cum assumenda dolorem accusamus maiores, eaque atque. Aut quasi fugiat exercitationem odit. Nihil repellendus dolor, id pariatur odit unde. Culpa dicta ut fugiat optio quidem nostrum magnam unde architecto quae eius suscipit cupiditate ullam in atque asperiores, nam eveniet temporibus voluptatem nulla. Excepturi qui, ratione accusamus laudantium incidunt voluptates porro beatae nisi debitis dolorum nobis dolore architecto odio eaque earum quae! Quaerat quas veniam rem culpa harum perspiciatis mollitia ipsam inventore consequuntur, animi, cumque, quisquam unde veritatis ipsum rerum, dolor repellendus ratione vel! At nisi obcaecati, soluta eaque vel? Praesentium necessitatibus itaque dicta excepturi illum minima."
 		};


 		this.http.post('http://www.wikievent.net/index.php/api/Wikievent/autoappform', JSON.stringify(body))
 		.map(res => res.json())
 		.subscribe(data => {
 			console.log(data);
 		});



 		return new Promise(resolve => {
 			this.http.get('http://www.wikievent.net/index.php/api/Wikievent/autoappform')
 			.map(res => res.json())
 			.subscribe(results => {
 				console.log(results)
 			})
 		});*/



 	}

/* 	postSomeData(){
 		// let headers = new Headers();
 		// headers.append('Content-Type', 'application/json');



 	}



 	getDataback(){



 	}*/


/* 	postRequest(){
 		var headers = new Headers();
 		headers.append("Accept", 'application/json');
 		headers.append('Content-Type', 'application/json' );
 		headers.append('Access-Control-Request-Method', '*' );
 		// headers.append('GET, POST', 'Access-Control-Allow-Methods' );
 		let options = new RequestOptions({ headers: headers });

 		let postParams = {
 			name: 'foo',
 			mobile: 123,
 			message: 'some funny message just to pass it through!'
 		}

 		this.http.post("http://www.wikievent.net/index.php/api/Wikievent/autoappform", JSON.stringify(postParams), options)
 		.map(res => res.json())
 		.subscribe(data => {
 			console.log(data);
 			{{data}}
 		}, error => {
 			console.log(error);// Error getting the data
 			{{error}}
 		});

 	}*/


/* 	postRequest() {
 		var headers = new Headers();
 		headers.append("Accept", 'application/json');
 		headers.append('Content-Type', 'application/json' );
 		// headers.append('Access-Control-Request-Method', '*' );
 		let options = new RequestOptions({ headers: headers });

 		let postParams = {
 			name: 'foo',
 			mobile: '123',
 			message: 'sime text!'
 		}

 		this.http.post("http://www.wikievent.net/index.php/api/Wikievent/autoappform", postParams, options)
 		.subscribe(data => {
 			console.log(data);
 		}, error => {
 			console.log(error);// Error getting the data
 		});
 	}*/


 	postRequest() {
 		var headers = new Headers();
 		headers.append("Accept", 'application/json');
 		headers.append('Content-Type', 'application/json' );
 		// headers.append('Access-Control-Request-Method', '*' );
 		let options = new RequestOptions({ headers: headers });

 		let postParams = {
 			name: 'foo',
 			mobile: '123',
 			message: 'sime text!'
 		}


		 return new Promise((resolve, reject) => {
			 this.http.post('http://www.wikievent.net/index.php/api/Wikievent/autoappform', postParams, options)
			 .subscribe(data => {
				 console.log(data);
			 }, error => {
				 console.log(error);
			 });
		 })
 	}



 	

 }

