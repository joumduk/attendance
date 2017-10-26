import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { NavController } from 'ionic-angular';
import { Attendance } from '../../model/attendance';
import { AttendanceService } from '../../service/attendance.service';
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  selected_date:string;
  attendances: Observable<Attendance[]>;
  constructor(public navCtrl: NavController,private navParams:NavParams,private attendanceService:AttendanceService) {
    this.selected_date = navParams.get('selected_date'); 
    this.attendances = attendanceService.getAttendancesByDate(this.selected_date);
  }
}
