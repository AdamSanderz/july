import { Component, ViewChild } from '@angular/core';
// import { WheelSelector } from '@ionic-native/wheel-selector';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/basic/basic';
import { StoresListPage } from '../pages/stores-list/stores-list';
import { MechanicsPage } from '../pages/mechanics/mechanics';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutPage } from '../pages/about/about';
import { SendingEmailPage } from '../pages/sending-email/sending-email';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Basic Page', component: BasicPage },
      { title: 'Stores List', component: StoresListPage },
      { title: 'Mechanics List', component: MechanicsPage },
      { title: 'Contact Us', component: ContactUsPage },
      { title: 'About', component: AboutPage },
      { title: 'Sending Email', component: SendingEmailPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
