import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DevelopersService } from '../../services/developers.service';
import { Observable } from 'rxjs/Observable';

import * as collection from './developers.actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DevelopersCollectionEffect {

  constructor(
    private actions$: Actions,
    private devService: DevelopersService
  ) { }

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.devService.getList()
        .map((res) => new collection.LoadSuccessAction(res))
        .catch(error => of(new collection.LoadFailAction(error)))
    );
}
