import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AttendanceService } from '../../service/attendance.service';
import { Attendance } from '../../model/attendance';
import { StudentService } from '../../service/student.service';
import { Student } from '../../model/student';
import { Observable } from 'rxjs/Observable';
import { SMS } from '@ionic-native/sms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'qrcode.html'
})
export class QrcodePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  attendance: Attendance = new Attendance();
  constructor(private barcodeScanner: BarcodeScanner, private attendanceService: AttendanceService,
    private studentService: StudentService, private sms: SMS, private storage: Storage) {
    storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      this.attendance.user_id=val;
    });
    this.scanCode();
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.text != "") {
        let result: Observable<Student[]> = this.studentService.getStudent(barcodeData.text);
        result.subscribe((student_data: Student[]) => {
          this.attendance.student_id = barcodeData.text;
          this.attendance.student_name = student_data[0].name;
          var current_date = new Date();
          this.attendance.arrival_date = current_date.getFullYear().toString() + '-' + (current_date.getMonth() + 1).toString() + '-' + (current_date.getDate()<10?"0"+current_date.getDate():current_date.getDate().toString())
          this.attendance.arrival_time = current_date.getHours().toString() + ':' + (current_date.getMinutes()<10?"0"+current_date.getMinutes().toString():current_date.getMinutes().toString())
          this.attendanceService.newAttendance(this.attendance);
          this.attendanceService.newAttendanceDate(this.attendance);
          this.sms.send(student_data[0].parent_tel, 'Your child ( ' + student_data[0].name + ' ) attend the class today');
          this.scanCode();
        });
      }
    }, (err) => {
      console.log('Error: ', err);
    });
  }
}
