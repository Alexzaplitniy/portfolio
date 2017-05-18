import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import '@ngrx/core/add/operator/select';

import * as fromRoot from '../../store';
import * as developerAction from '../../store/developers/developers.actions';

@Component({
  moduleId: module.id,
  selector: 'app-dev-view-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-dev-selected-page></app-dev-selected-page>`
})
export class DevViewPageComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;

  constructor(
    public store: Store<fromRoot.State>,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actionsSubscription = this.route.params
      .select<string>('slug')
      .map(slug => new developerAction.SelectAction(slug))
      .subscribe(this.store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}
