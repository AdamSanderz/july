import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
     selector: 'page-contact-us',
     templateUrl: 'contact-us.html',
 })
 export class ContactUsPage {



     constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer) {
         // this.checkIfCanSendEmail();

         /*this.emailComposer.isAvailable().then((available: boolean) => {
             if(available) {
                 //Now we know we can send
             }
         });*/
     }

     ionViewDidLoad() {
         console.log('ionViewDidLoad ContactUsPage');
     }


 
         


     // clicked = '';

     sendEmail(){
                  let email = {
         to: 'mohammad@pendara.co, rahmanipour.mohammad@gmail.com',
         // cc: 'rahmanipour.mohammad@gmail.com',
         // bcc: ['mohammad@pendara.co', 'rahmanipour.mohammad@gmail.com'],
         /*attachments: [
         'file://img/carservice.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
         ],*/
         subject: 'A Message from TheAutoApp',
         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit, corporis, eum enim et veritatis labore. Officiis quasi modi cum reprehenderit, quod impedit quidem suscipit eveniet distinctio repudiandae! Numquam tenetur iure, cum vel, doloribus eveniet quos officia facere nam accusamus laboriosam et accusantium suscipit nobis sunt, modi itaque est distinctio hic dolorum error repellendus odit eaque. Ducimus placeat a voluptatum tenetur reprehenderit, et eum, vero rerum culpa dolorem obcaecati! Ad aliquam nesciunt laudantium nihil ipsa sequi illo, similique minima inventore minus possimus tempora commodi provident beatae dignissimos. Iusto velit nam, accusantium labore, enim quaerat ad ducimus laudantium dignissimos, autem nulla. Dolores quia voluptatum accusantium necessitatibus! Laboriosam iure excepturi eveniet amet nisi! لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
         isHtml: true
     };

         // Send a text message using default options
         this.emailComposer.open(email);

     }




 }
