import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TagsService {
  private _list$: FirebaseListObservable<any>;

  constructor(
    private db: AngularFireDatabase
  ) {

    this._init();
  }

  public getList(): FirebaseListObservable<any> {
    return this._list$;
  }

  private _init() {
    this._list$ = this.db.list('tags');
  }

}
