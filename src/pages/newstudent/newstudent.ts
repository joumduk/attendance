import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';


//page
import { StudentsPage } from '../students/students';


import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';

declare var require: any;
let QRCode = require('qrcode');
@Component({
  selector: 'page-newstudent',
  templateUrl: 'newstudent.html'
})
export class NewStudentPage {
  @Input('qrc-value') value = 'https://www.techiediaries.com';
  @Input('qrc-version') version : '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39'|'40' | '' = '';

  @Input('qrc-errorCorrectionLevel') errorCorrectionLevel : 'L' | 'M' | 'Q' | 'H' = 'M';
  
  student: Student = new Student();
  error: string;
  constructor(public navCtrl: NavController, public storage: Storage, private studentService: StudentService,
    private emailComposer: EmailComposer ) {
  }
  addstudent() {
   
    this.storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      if (val != null) {
        this.student.add_date = new Date().toDateString();
        this.student.user_id = val;
        console.log(this.student);
        this.value=this.studentService.pushStudent(this.student)
        this.toDataURL().then((v : string)=>{
          var base64parts = v.split(',');
          base64parts[0] = "base64:Qrcode.png//";
          var compatibleAttachment =  base64parts.join("");
          let email = {
            to: this.student.parent_email,
            attachments: [
              compatibleAttachment
            ],
            subject: 'The teacher registed your child information',
            body: 'Name : '+this.student.name+
                  '<Br>Class : '+this.student.class+
                  '<Br>Parent Name : '+this.student.parent_name+
                  '<Br>Parent Tel : '+this.student.parent_tel+
                  '<Br>Parent Email : '+this.student.parent_email,
            isHtml: true
          };
          this.emailComposer.open(email);
          this.navCtrl.setRoot(StudentsPage);
        }).catch((e)=>{
          console.error(e);
        })
      }
    });
    
    
  }
  toDataURL(){
    return new Promise((resolve,reject)=>{
      QRCode.toDataURL(this.value, { version : this.version , errorCorrectionLevel : this.errorCorrectionLevel } ,function (err, url) {
        if(err){
          console.error(err);
          reject(err);
        }
        else{
          //console.log(url);
          resolve(url);
        }
      })      
    });
  }
}
