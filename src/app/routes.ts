import { Routes } from '@angular/router';
import { DevListPageComponent } from './containers/dev-list-page/dev-list-page.component';
import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: DevListPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
