import { Routes } from '@angular/router';
import { DevListPageComponent } from './containers/dev-list-page/dev-list-page.component';
import { NotFoundPageComponent } from './containers/not-found-page';
import { DevViewPageComponent } from './containers/dev-view-page/dev-view-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DevListPageComponent
  },
  {
    path: 'developer/:slug',
    component: DevViewPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
