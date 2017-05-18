import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeveloperInterface } from '../../models/developer/developer.interface';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store';

@Component({
  moduleId: module.id,
  selector: 'app-dev-selected-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <app-dev-detail
              [developer]="developer$ | async"
      ></app-dev-detail>`
  ,
})
export class DevSelectedPageComponent implements OnInit{
  developer$: Observable<DeveloperInterface>;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.developer$ = this.store.select(fromRoot.getSelectedDeveloper);
  }

}
