import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DeveloperInterface } from '../models/developer/developer.interface';

@Injectable()
export class DevelopersService {
  private list: FirebaseListObservable<DeveloperInterface[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.list = this.db.list('devList');
  }

  getList(): FirebaseListObservable<DeveloperInterface[]> {
    return this.list;
  }

  update(key: string, data: DeveloperInterface): void {
    this.list.update(key, data);
  }
}
