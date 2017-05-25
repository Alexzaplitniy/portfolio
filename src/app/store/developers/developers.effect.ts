import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DevelopersService } from '../../services/developers.service';
import * as collection from './developers.actions';
import { of } from 'rxjs/observable/of';
import { DeveloperInterface } from '../../models/developer/developer.interface';
import { DeveloperCollectionService } from '../../services/developer-collection.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DevelopersCollectionEffect {

  constructor(
    private actions$: Actions,
    private devCollectionService: DeveloperCollectionService,
    private devService: DevelopersService
  ) {}

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.devCollectionService.getList()
        .map((res) => new collection.LoadSuccessAction(res))
        .catch(error => of(new collection.LoadFailAction(error)))
    );

  @Effect()
  addToCollection$ = this.actions$
    .ofType(collection.ADD_DEVELOPER)
    .map((action: collection.AddDeveloperAction) => action.payload)
    .mergeMap((developer: DeveloperInterface) => {
      return this.devService.addItem(developer).then(() => new collection.AddDeveloperSuccessAction(developer))
    });
}
