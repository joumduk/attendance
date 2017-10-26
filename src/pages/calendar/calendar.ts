import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';


@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})

export class CalendarPage {
  selected_date:string;
  constructor(public navCtrl: NavController) {
   
  }
  onDaySelect(event){
    this.selected_date=event.year+"-"+(event.month+1)+"-"+event.date;
  }
  reportOfSelcted(){
    this.navCtrl.push(ReportPage, {
      selected_date: this.selected_date
    });
  }
}
