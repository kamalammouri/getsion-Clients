import { ClientModule } from 'src/app/modules/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  id!: string;
  _client:ClientModule | any;
  constructor(private clientService:ClientService,private raute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id =this.raute.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(resp => {this._client=resp; console.log(this._client)});

  }



}
