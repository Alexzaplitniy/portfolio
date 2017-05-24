import { Routes } from '@angular/router';
import { DevListPageComponent } from './containers/dev-list-page/dev-list-page.component';
import { NotFoundPageComponent } from './containers/not-found-page';
import { DevViewPageComponent } from './containers/dev-view-page/dev-view-page.component';
import { DeveloperExistsGuard } from './guards/developer-exists';
import { AdminComponent } from './containers/admin/admin.component';
import { AddDeveloperFormComponent } from './components/admin/add-developer-form/add-developer-form.component';

export const routes: Routes = [
  {
    path: '',
    component: DevListPageComponent
  },
  {
    path: 'developer/:slug',
    canActivate: [ DeveloperExistsGuard ],
    component: DevViewPageComponent
  },
  {
    path: 'admin',
    // canActivate: [  ],
    component: AdminComponent,
    children: [
      {
        path: 'add-developer',
        component: AddDeveloperFormComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
