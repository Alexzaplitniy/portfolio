import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store';
import { DeveloperInterface } from '../../models/developer/developer.interface';

@Component({
  moduleId: module.id,
  selector: 'app-dev-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dev-list-page.component.html'
})
export class DevListPageComponent implements OnInit {
  list$: Observable<DeveloperInterface[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.list$ = this.store.select(fromRoot.getDevelopersList);
  }

}
