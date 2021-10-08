import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ClientModule } from 'src/app/modules/client';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

   id!: string;
   _client:ClientModule | any ={
     firstName:"",
     lastName:"",
     email:"",
     number:0,
     balance:0
   };

  constructor(private clientService:ClientService,private router:Router,private raute:ActivatedRoute,private flashMessage:FlashMessagesService) {

  }

  ngOnInit(): void {

    this.id = this.raute.snapshot.params['id']; //recupere id from url exp: localhost/client/xxxxx  id=xxxxx
    this.clientService.getClient(this.id).subscribe(resp => {this._client=resp; console.log(this._client)}); //recupere client by id

  }

  onSubmite(){
    this._client.id = this.id;
    this.clientService.updateClient(this._client);

    this.flashMessage.show('Client Update Successfully',{cssClass:'alert alert-success text-center m-2',timeout:3000});

     return this.router.navigate(['/client/'+this.id]);
  }
}
