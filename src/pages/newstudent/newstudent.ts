import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//page
import { StudentsPage } from '../students/students';


import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'page-newstudent',
  templateUrl: 'newstudent.html'
})
export class NewStudentPage {
  student:Student=new Student();
  error:string;
  constructor(public navCtrl: NavController,public storage:Storage,private studentService:StudentService){
    
  }
  addstudent(){
    // this.userService.pushUser(this.user);
    // 
    this.storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      if(val!=null){
        this.student.add_date=new Date().toDateString();
        this.student.user_id=val;
        console.log(this.student);
        if(this.studentService.pushStudent(this.student)){
          this.navCtrl.setRoot(StudentsPage);
       }
      } 
    });
  }
}
