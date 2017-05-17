import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeveloperInterface } from '../../models/developer/developer.interface';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store';

@Component({
  selector: 'app-dev-selected-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <app-dev-detail
              [developer]="developer$ | async"
              
      ></app-dev-detail>`
  ,
})
export class DevSelectedPageComponent {
  developer$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.developer$ = this.store.select(fromRoot.getSelectedDeveloper);
  }

}
