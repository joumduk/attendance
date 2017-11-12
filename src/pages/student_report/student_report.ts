import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Student } from '../../model/student';
import { Attendance } from '../../model/attendance';
import { StudentService } from '../../service/student.service';
import { AttendanceService } from '../../service/attendance.service';

import { EditStudentPage } from '../editstudent/editstudent';

import { StudentsPage } from '../students/students'


@Component({
  selector: 'page-student-report',
  templateUrl: 'student_report.html'
})
export class StudentReportPage {
  student: Student;
  createdCode:string;
  attendances: Observable<Attendance[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private studentService: StudentService, private attendanceService: AttendanceService) {
    var student_id = navParams.get('student_id'); 
    console.log("Student info : No.",student_id);
    this.attendances = attendanceService.getAttendancesOfStudent(student_id);
    let result:Observable<Student[]>=studentService.getStudent(student_id);
    result.subscribe((student_data:Student[])=>{
      this.student=student_data[0]
    });
    
  }
  removeStudent(){
    var student_id = this.navParams.get('student_id'); 
    this.studentService.removeStudent(student_id);
    this.navCtrl.setRoot(StudentsPage);
  }
  editStudent(){
    var student_id = this.navParams.get('student_id'); 
    this.navCtrl.push(EditStudentPage, {
      student_id: student_id
    });
  }
}
