import { ClientModule } from 'src/app/modules/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  id!: string;
  _client:ClientModule | any;
  constructor(private clientService:ClientService,private raute:ActivatedRoute,private flashMessage:FlashMessagesService,private router:Router) {

  }

  ngOnInit(): void {
    this.id = this.raute.snapshot.params['id']; //recupre id from url
    this.clientService.getClient(this.id).subscribe(resp => {this._client=resp; console.log(this._client)});
  }

  deleteClient(){
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be delete the client!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {

    this._client.id = this.id;
    this.clientService.deleteClient(this._client);
    this.flashMessage.show('Client Delete Successfully',{cssClass:'alert alert-warning text-center m-2',timeout:3000});

    Swal.fire(
      'Deleted!',
      'Your Client has been deleted.',
      'success'
    )

    this.router.navigate(['/']);
  }
})

  }



}
