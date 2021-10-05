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
   _client:ClientModule | any;
  constructor(private clientService:ClientService,private router:Router,private raute:ActivatedRoute,private flashMessage:FlashMessagesService) {

  }

  ngOnInit(): void {

    this.id =this.raute.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(resp => {this._client=resp; console.log(this._client)});

  }

  onSubmite(){
    this.clientService.updateClient(this._client);
     this.flashMessage.show('Client Update Successfully',{cssClass:'alert alert-success text-center'});

     return this.router.navigate(['/']);
  }
}
