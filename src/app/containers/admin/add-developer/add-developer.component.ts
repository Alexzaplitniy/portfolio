import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DeveloperInterface } from '../../../models/developer/developer.interface';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as developersAction from '../../../store/developers/developers.actions'

@Component({
  selector: 'app-add-developer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-add-developer-form 
        (add)="addToCollection($event)">
    </app-add-developer-form>
  `
})
export class AddDeveloperComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  addToCollection(user: DeveloperInterface): void {
    this.store.dispatch(new developersAction.AddDeveloperAction(user));
  }

}
