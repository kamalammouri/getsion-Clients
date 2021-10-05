import { Router, Routes } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ClientModule } from 'src/app/modules/client';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  _client:ClientModule={
    firstName:"",
    lastName:"",
    email:"",
    number:0,
    balance:0
  }

  constructor(private clientService:ClientService,private route:Router,private flashMessage:FlashMessagesService) {

}
  ngOnInit(): void {
  }
  onSubmit(){
    this.clientService.postClient(this._client);
    this.flashMessage.show('Client added Successfully',{cssClass:'alert alert-success text-center'});
    return this.route.navigate(['/']);
  }

}