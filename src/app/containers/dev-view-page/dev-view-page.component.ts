import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import '@ngrx/core/add/operator/select';

import * as fromRoot from '../../store';
import * as developerAction from '../../store/developers/developers.actions';

@Component({
  selector: 'app-dev-view-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-dev-selected-page></app-dev-selected-page>`
})
export class DevViewPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(
    public store: Store<fromRoot.State>,
    public route: ActivatedRoute
  ) {
    this.actionsSubscription = route.params
      .select<string>('slug')
      .map(slug => new developerAction.SelectAction(slug))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}
