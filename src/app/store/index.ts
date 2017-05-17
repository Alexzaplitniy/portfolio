import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromDevelopers from './developers/developers.reducer';

export interface State {
  developers: fromDevelopers.State;
  router: fromRouter.RouterState,
}

const reducers = {
  developers: fromDevelopers.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getDevelopersState = (state: State) => state.developers;

export const getDevelopersLoaded = createSelector(getDevelopersState, fromDevelopers.getLoaded);
export const getDevelopersLoading = createSelector(getDevelopersState, fromDevelopers.getLoading);
export const getDevelopersList = createSelector(getDevelopersState, fromDevelopers.getList);
export const getSelectedDeveloper = createSelector(getDevelopersState, fromDevelopers.getSelected);