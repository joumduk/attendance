import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { NavController } from 'ionic-angular';
import { Attendance } from '../../model/attendance';
import { AttendanceService } from '../../service/attendance.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  selected_date:string=new Date().toISOString();
  attendances: Observable<Attendance[]>;
  constructor(public navCtrl: NavController,private navParams:NavParams,private attendanceService:AttendanceService,private storage: Storage) {
    this.selected_date = navParams.get('selected_date'); 
    storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      this.attendances = attendanceService.getAttendancesByDate(this.selected_date,val);
    });
    
  }
}
