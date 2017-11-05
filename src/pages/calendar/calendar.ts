import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})

export class CalendarPage {
  selected_date:String;
  constructor(public navCtrl: NavController,private datePicker: DatePicker) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.selected_date=date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + (date.getDate()<10?"0"+date.getDate().toString():date.getDate().toString())
      },
      err => console.log('Error occurred while getting date: ', err)
    );
    
  }
  reportOfSelcted(){
    this.navCtrl.push(ReportPage, {
      selected_date: this.selected_date
    });
  }
  openPicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.selected_date=date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + (date.getDate()<10?"0"+date.getDate().toString():date.getDate().toString())
      },
      err => console.log('Error occurred while getting date: ', err)
    );
    return false;
  }
}
