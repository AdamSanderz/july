import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { HelloWorldPage } from '../pages/hello-world/hello-world';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/basic/basic';
import { MechanicsPage } from '../pages/mechanics/mechanics';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelloServiceProvider } from '../providers/hello-service/hello-service';
import { TitlesProvider } from '../providers/titles/titles';
import { StoresProvider } from '../providers/stores/stores';
import { StoresListPage } from "../pages/stores-list/stores-list";
import { StoresListDetailsPage } from "../pages/stores-list-details/stores-list-details";
import { WheelSelector } from '@ionic-native/wheel-selector';

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        BasicPage,
        StoresListPage,
        StoresListDetailsPage,
        MechanicsPage,
        ContactUsPage,
        AboutPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        // HelloWorldPage,
        ItemDetailsPage,
        ListPage,
        BasicPage,
        StoresListPage,
        StoresListDetailsPage,
        MechanicsPage,
        ContactUsPage,
        AboutPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        HelloServiceProvider,
        TitlesProvider,
        StoresProvider,
        WheelSelector
    ]
})
export class AppModule {
}
