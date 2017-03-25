import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Talk2dbService {
  users: FirebaseListObservable<any>;

  constructor(private angularfire: AngularFire) { }

  submitMsg(formObject) {
    const users = this.angularfire.database.list('/users');
    users.push(formObject);
  }

}
