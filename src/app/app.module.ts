import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//page
import { StudentReportPage } from '../pages/student_report/student_report';
import { ReportPage } from '../pages/report/report';
import { StudentsPage } from '../pages/students/students';
import { ProfilePage } from '../pages/profile/profile';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { NewStudentPage } from '../pages/newstudent/newstudent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StudentService } from '../service/student.service';
import { AttendanceService } from '../service/attendance.service';
import { UserService } from '../service/user.service';

import { IonicStorageModule } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyB4rQ_CxkhKIrPWfjHVL6Qvpf-GrpZM4Bc",
  authDomain: "attendant-d0ea8.firebaseapp.com",
  databaseURL: "https://attendant-d0ea8.firebaseio.com",
  projectId: "attendant-d0ea8",
  storageBucket: "attendant-d0ea8.appspot.com",
  messagingSenderId: "495256561392"
};


@NgModule({
  declarations: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    CalendarPage,
    NewStudentPage,
    StudentReportPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    CalendarPage,
    LoginPage,
    SignupPage,
    StudentReportPage,
    NewStudentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    StudentService,
    AttendanceService,
    BarcodeScanner,
    UserService,
    Calendar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
