import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autService:AuthClientService,private flashMsg:FlashMessagesService,private route:Router) { }

  isLoginIn:boolean=false;
  userLogIn:string|any="";

  ngOnInit(): void {
    this.autService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoginIn=true;
        this.userLogIn=auth.email;
      }
    })
  }

  onLogOut(){
    this.isLoginIn=false;
    this.autService.logOut();
    this.flashMsg.show('You are logOut Successufully',{
        cssClass:'alert-success text-center mt-2',
        timeout:3000
      });
      return this.route.navigate(['/login']);
  }

}
