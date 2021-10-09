import { AuthClientService } from 'src/app/services/auth-client.service';
import { ClientModule } from './../../modules/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

   total:number=0;
  _clients: ClientModule[] = [];
  searchClient:ClientModule[]= [];

  constructor(private clientService:ClientService,private autClient:AuthClientService) { }

  ngOnInit(): void {
    this.autClient.getAuth()
    .subscribe( (auth) => this.clientService
                          .getClientCollection(auth?.uid)
                          .subscribe(resp => this._clients = resp)
              );

   console.log(this.getTotalBalance());

  }

  getTotalBalance(){
   return this._clients.reduce((total,client) => total+client.balance!,0);
  }

/*
  search(value:string){
    this.searchClient = (value) ? this._clients.filter(client=>client.firstName?.includes(value)):this._clients;

  }*/
}
