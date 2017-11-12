import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { User } from "../model/user";


@Injectable()
export class UserService {
    constructor(public db:AngularFireDatabase){
        
    }
    getUsers():Observable<User[]>{
        console.log("User Service : get users list");
        return this.db.list('User').valueChanges();;
    }
    getUser(id:number):Observable<User[]>{
        console.log("User Service : get user");
        return this.db.list('User',ref => ref.orderByChild('id').equalTo(id)).valueChanges();
    }
    getUserByEmail(email:string):Observable<User[]>{
        console.log("User Service : get user");
        return this.db.list('User',ref => ref.orderByChild('email').equalTo(email)).valueChanges();
    }
    pushUser(data:User):boolean{
        var aRef = this.db.list('User').push(null);
        console.log(aRef.key);
        data.id=aRef.key;
        aRef.set(data);      
        return true
    }
    updatehUser(data:User):boolean{
        console.log(JSON.stringify(data));
        this.db.list('User').set(data.id+"",data);
        return true
    }
}