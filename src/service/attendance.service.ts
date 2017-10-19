import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Attendance } from "../model/attendance";


@Injectable()
export class AttendanceService {
    constructor(public db:AngularFireDatabase){
    }
    getAttendancesOfStudent(student_id:number):Observable<Attendance[]>{
        console.log("Attendance Service : get Attendance of Student")
        return this.db.list('Attendance',ref => ref.orderByChild('student_id').equalTo(student_id)).valueChanges()
    }
    removeAttendancesOfStudent(student_id:number):Observable<Attendance[]>{
        console.log("Attendance Service : Remove Attendance of Student")
        return this.db.list('Attendance',ref => ref.orderByChild('student_id').equalTo(student_id)).valueChanges()
    }
    
}