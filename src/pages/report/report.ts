import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { NavController } from 'ionic-angular';
import { Attendance } from '../../model/attendance';
import { Student } from '../../model/student';
import { AttendanceService } from '../../service/attendance.service';
import { StudentService } from '../../service/student.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  selected_date:string=new Date().toISOString();
  attendances: Attendance[];
  attend_student: Array<String>=new Array<String>();
  students: Observable<Student[]>;
  constructor(public navCtrl: NavController,private navParams:NavParams,private attendanceService:AttendanceService,
    private storage: Storage,private studentService:StudentService) {
    this.selected_date = navParams.get('selected_date'); 
    storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      var attendances = attendanceService.getAttendancesByDate(this.selected_date,val);
      attendances.subscribe(val=>{
          this.attendances=val;
      });
      this.students = studentService.getStudentsOfUser(val);
    });  
  }
  checkAttend(id:String):boolean{
    var result=false;
    if(this.attendances){
      this.attendances.forEach(element => {
        if(element.student_id==id){
          result=true
        }
      });
    }
    return result;
  }
}
