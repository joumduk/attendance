import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  calendar=CalendarPage
  constructor(public navCtrl: NavController) {

  }

}
