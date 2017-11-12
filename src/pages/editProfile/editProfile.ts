import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
//page
import { TabsPage } from '../tabs/tabs';


import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {
  user:User=new User();
  error:string;
  constructor(public navCtrl: NavController,public storage:Storage,private userService:UserService){
    storage.get('user_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)
      let result:Observable<User[]>=userService.getUser(val);
      result.subscribe((user_data:User[])=>{
        this.user=user_data[0]
      });
    
    });
  }
  editProfile(){
    // this.userService.pushUser(this.user);
    if(this.userService.updatehUser(this.user)){
      this.navCtrl.push(TabsPage);
    }
  }
}
