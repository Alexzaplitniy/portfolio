import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DeveloperInterface } from '../models/developer/developer.interface';

@Injectable()
export class DevelopersService {
  private _list$: FirebaseListObservable<DeveloperInterface[]>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.init();
  }

  public getList(): FirebaseListObservable<DeveloperInterface[]> {
    return this._list$;
  }

  public addItem(data: DeveloperInterface) {
    return this._list$.push(data);
  }

  public update(key: string, data: DeveloperInterface): void {
    this._list$.update(key, data);
  }

  private init(): void {
    this._list$ = this.db.list('devList');
  }
}
