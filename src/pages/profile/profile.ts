import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
//page
import { CalendarPage } from '../calendar/calendar';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../editProfile/editProfile';

import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  calendar = CalendarPage;
  linkEditProfile=EditProfilePage;
  user: User;
  students: Observable<Student[]>;
  constructor(public navCtrl: NavController, public storage: Storage, private userService:UserService,private studentService:StudentService) {
    storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      if(val==null){
        this.navCtrl.setRoot(LoginPage);
      }else{
        let result:Observable<User[]>=userService.getUser(val);
        result.subscribe((user_data:User[])=>{
          this.user=user_data[0]
        });
        this.students=studentService.getStudentsOfUser(val);
      }
    });
  }
  logout(){
    this.storage.remove('user_id');
    this.navCtrl.setRoot(LoginPage);
  }

}
