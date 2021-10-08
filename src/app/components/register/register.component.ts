import { Component, OnInit } from '@angular/core';
import { AuthClientService } from './../../services/auth-client.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  $email:string="";
  $password:string="";
  $passwordRep:string="";

 constructor(private authService:AuthClientService,private flashMsg:FlashMessagesService,private route:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
      this.authService.register(this.$email,this.$password).then(
      register => {
        this.flashMsg.show('Register Complite',{cssClass:'alert-success mt-2 text-center',timeout:4000});
        this.route.navigate(['/']);
      }
    ).catch(error=>{
      this.flashMsg.show(error,{cssClass:'alert-danger mt-2 text-center',timeout:4000});
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
