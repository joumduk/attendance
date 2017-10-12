import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentReportPage } from '../student_report/student_report';
@Component({
  selector: 'page-students',
  templateUrl: 'students.html'
})
export class StudentsPage {
  student_report=StudentReportPage
  constructor(public navCtrl: NavController) {

  }

}
