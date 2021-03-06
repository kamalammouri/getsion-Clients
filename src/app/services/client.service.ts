import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ClientModule } from '../modules/client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  ClientCollection:AngularFirestoreCollection<ClientModule>;
  ClientDoc!: AngularFirestoreDocument<ClientModule>;

  constructor(private afs:AngularFirestore) {

    this.ClientCollection= this.afs.collection('clients');
  }

    getClientCollection(userUID:string): Observable<ClientModule[]> {

    return this.afs.collection('clients',ref=>ref.where('userUID','==',userUID)).snapshotChanges()
    .pipe(
        map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  postClient(client:ClientModule){
    this.ClientCollection.add(client);
  }

  getClient(id:string){
  return this.ClientCollection.doc(id).valueChanges();
  }

  deleteClient(client:ClientModule){
    this.ClientDoc = this.ClientCollection.doc(client.id);
    this.ClientDoc.delete();
  }
  updateClient(client:ClientModule){
    this.ClientDoc = this.ClientCollection.doc(client.id);
    this.ClientDoc.update(client);
  }




}
