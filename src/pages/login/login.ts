import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//page
import { CalendarPage } from '../calendar/calendar';
import { ProfilePage } from '../profile/profile';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  userdata: User = new User();
  error: string;
  constructor(public navCtrl: NavController, public storage: Storage, private userservice: UserService) {
    this.ngAfterViewInit();
  }
  calendar = CalendarPage;
  profile_page = ProfilePage;
  GotoSignup() {
    this.navCtrl.push(SignupPage);
  }
  login() {
    // console.log("username",(this.userdata));
    var userlist = this.userservice.getUserByEmail(this.userdata.email);
    if (userlist) {
      userlist.forEach((val) => {
        if (val.length > 0) {
          if (val[0].password == this.userdata.password) {
            this.storage.set("user_id", val[0].id);
            this.navCtrl.push(TabsPage);
          }
        }
      });
    }
    this.error = "Invalid Email and Password, Please re-check your email and password";
  }
  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    }
  }
}
