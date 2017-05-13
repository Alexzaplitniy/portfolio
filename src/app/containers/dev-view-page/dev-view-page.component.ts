import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-view-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dev-view-page.component.html'
})
export class DevViewPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
