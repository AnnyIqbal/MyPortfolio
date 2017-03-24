import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Talk2dbService {
  users: FirebaseListObservable<any> = this.angularfire.database.list('/users');

  constructor(private angularfire: AngularFire) { }

  submitMsg(formObject) {
    this.users.push(formObject);
  }

}
