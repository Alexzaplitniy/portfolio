import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PortfolioInterface } from '../models/porfolio/portfolio.interface';

@Injectable()
export class PortfolioService {
  private _list$: FirebaseListObservable<PortfolioInterface[]>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this._init();
  }

  public getList(): FirebaseListObservable<PortfolioInterface[]> {
    return this._list$;
  }

  private _init() {
    this._list$ = this.db.list('portfolio');
  }

}
