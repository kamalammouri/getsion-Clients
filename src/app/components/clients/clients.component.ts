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

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService
    .getClientCollection()
    .subscribe(resp =>  this._clients = resp);

   console.log(this.getTotalBalance());
  }

  getTotalBalance(){
   return this._clients.reduce((total,client) => total+client.balance!,0);
  }


}
