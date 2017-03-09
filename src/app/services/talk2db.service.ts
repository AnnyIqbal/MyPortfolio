import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Talk2dbService {
  contacts: FirebaseListObservable<any> ;

  constructor() { }

  submitMsg(formObject) {
    console.log('$$$$$$$$$$', this.contacts.$ref);
    // this.contacts.$ref = formObject;
  }

}
