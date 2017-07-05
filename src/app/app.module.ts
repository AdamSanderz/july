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
import { EmailComposer } from '@ionic-native/email-composer';
import { SendingEmailProvider } from '../providers/sending-email/sending-email';
import { SendingEmailPage } from '../pages/sending-email/sending-email';


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
        SendingEmailPage
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
        SendingEmailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        HelloServiceProvider,
        TitlesProvider,
        StoresProvider,
        WheelSelector,
        EmailComposer,
    SendingEmailProvider
    ]
})
export class AppModule {
}
