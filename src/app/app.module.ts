import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StudentReportPage } from '../pages/student_report/student_report';
import { ReportPage } from '../pages/report/report';
import { StudentsPage } from '../pages/students/students';
import { ProfilePage } from '../pages/profile/profile';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    StudentReportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    StudentReportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
