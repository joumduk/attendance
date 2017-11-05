import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Student } from '../../model/student';

import { StudentReportPage } from '../student_report/student_report';
import { NewStudentPage } from '../newstudent/newstudent';

import { StudentService } from '../../service/student.service';

@Component({
  selector: 'page-students',
  templateUrl: 'students.html'
})
export class StudentsPage {
  students:Observable<Student[]>;
  newstudentpage=NewStudentPage;
  constructor(public navCtrl: NavController, storage: Storage,private studentService: StudentService) {
    storage.get('user_id').then((val) => {
      this.students=studentService.getStudentsOfUser(val);
    });
  }
  pushPage(id) {
    console.log("Id :", id);
    this.navCtrl.push(StudentReportPage, {
      student_id: id
    });
  }
}
