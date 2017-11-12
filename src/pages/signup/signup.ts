import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//page
import { TabsPage } from '../tabs/tabs';


import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user:User=new User();
  error:string;
  constructor(public navCtrl: NavController,public storage:Storage,private userService:UserService){
    
  }
  signup(){
    // this.userService.pushUser(this.user);
    if(this.matchPassword(this.user)){
      console.log("Error :Don't metch password");
      this.error ="Don't metch between Password and confirm password";
    }else if(this.user.password.length<6){
      console.log("Error : passwrod short");
      this.error ="Password is too short (minimum is 6 characters).";
    }else if(this.checkValidEmail(this.user.email)){
      console.log("Error : Already has this email address ");
      this.error ="Already has this email address in out system";
    }else{
      this.deleteconfirm(this.user);
      var pass=Md5.hashStr(this.user.password);
      this.user.password=pass.toString();
      if(this.userService.pushUser(this.user)){
        this.navCtrl.push(TabsPage);
      }
    }
  }
  matchPassword(group): boolean {
    if (group.password==group.password2) {
      return false;
    }
    return true;
  }
  deleteconfirm(group):any{
    delete group.password2;
  }
  checkValidEmail(email):any{
    let result=this.userService.getUserByEmail(email);
    console.log(result);
    result.subscribe((k:User[])=>{
      if(k.length>0){
        return false;
      }else{
        return true;
      }
    });
  }
}
