import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/take';

import * as fromRoot from '../store';

@Injectable()
export class DeveloperExistsGuard implements CanActivate{

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  waitForCollectionToLoad(): Observable<boolean> {
    return this.store.select(fromRoot.getDevelopersLoaded)
      .filter(loaded => loaded)
      .take(1);
  }

  hasUserInStore(slug: string): Observable<boolean> {
    return this.store.select(fromRoot.getDevelopersList)
      .map(list => !!list.find((item) => item.slug === slug))
      .take(1);
  }

  hasUser(slug: string): Observable<boolean> {
    return this.hasUserInStore(slug)
      .switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        this.router.navigate(['/404']);
        return of(false);
      });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.waitForCollectionToLoad()
      .switchMap(() => this.hasUser(route.params['slug']));
  }
}