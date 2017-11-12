import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Student } from "../model/student";


@Injectable()
export class StudentService {
    constructor(private db:AngularFireDatabase){
        
    }
    getStudentsOfUser(id:string):Observable<Student[]>{
        console.log("Student Service: get Students list of User");
        return this.db.list('Students/',ref => ref.orderByChild('user_id').equalTo(id)).valueChanges();
    }
    getStudent(student_id:string):Observable<Student[]>{
        console.log("Student Service: get Student Detail");
        return this.db.list('Students/',ref => ref.orderByChild('student_id').equalTo(student_id)).valueChanges();;
    }
    pushStudent(data:Student):string{
        console.log("Student Service: Add new student information");
        var aRef = this.db.list('Students').push(null);
        console.log(aRef.key);
        data.student_id=aRef.key;
        aRef.set(data);      
        return aRef.key
    }
    removeStudent(id:string):void{
        console.log("Student Service: Remove Student [ No."+id+" ]");
        this.db.list("Students/"+id).remove().then(_ => console.log('item deleted!'));        
    }
    updateStudent(data:Student):boolean{
        console.log(JSON.stringify(data));
        this.db.list('Students').set(data.student_id,data);
        return true
    }
    
}