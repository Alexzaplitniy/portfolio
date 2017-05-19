import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DeveloperInterface } from '../models/developer/developer.interface';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DevelopersService {
  private list: any;

  constructor(
    private db: AngularFireDatabase
  ) {

    this.init();
  }

  private init() {
    this.list = this.db.list('devList')
      .mergeMap((res) =>
        this.db.list('tags').map((tags) => res.map((item) => {
          const _tags: string[] = [];

          item.tags.map((tag) => _tags.push(tags[tag].$value));
          item.tags = _tags;

          return item;
        }))
      );
  }

  getList(): FirebaseListObservable<DeveloperInterface[]> {
    return this.list;
  }

  addItem(data: DeveloperInterface) {
    this.list.push(data);
  }

  update(key: string, data: DeveloperInterface): void {
    this.list.update(key, data);
  }
}
