import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private afAuth:AngularFireAuth) {

  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth=> auth));
  }

    register(email:string,password:string){
    return new Promise((resolve,rejects)=>{
      this.afAuth
      .createUserWithEmailAndPassword(email,password)
      .then(userdata=>resolve(userdata),error=>rejects(error))
    });
  }

  login(email:string,password:string){
    return new Promise((resolve,rejects)=>{
      this.afAuth
      .signInWithEmailAndPassword(email,password)
      .then(userdata=>resolve(userdata),error=>rejects(error))
    });
  }

  loginGmail(){
     return new Promise((resolve,rejects)=>{
      this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(userdata=>resolve(userdata),error=>rejects(error))
    });
  }

  logOut(){
    this.afAuth.signOut();
  }
}
