import { Router } from '@angular/router';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  $email:string="";
  $password:string="";
  constructor(private authService:AuthClientService,private flashMsg:FlashMessagesService,private route:Router) { }

  ngOnInit(): void {

  }

  onLogin(){
    this.authService.login(this.$email,this.$password).then(auth=>{
    if(auth){
      this.flashMsg.show('You are login Successufully',{
        cssClass:'alert-success text-center mt-2',
        timeout:3000
      });
      this.route.navigate(['/']);
    }
  }).catch(error => {
        this.flashMsg.show(error.message,{
        cssClass:'alert-danger text-center mt-2',
        timeout:5000
      });
  })
  }

  onLoginGmail(){
    this.authService.loginGmail()
    .then(auth=>{
      if(auth){
      this.flashMsg.show('You are login Successufully',{
        cssClass:'alert-success text-center mt-2',
        timeout:3000
      });
      this.route.navigate(['/']);
    }
  }).catch(error => {
        this.flashMsg.show(error.message,{
        cssClass:'alert-danger text-center mt-2',
        timeout:5000
      });
  })
  }

}
