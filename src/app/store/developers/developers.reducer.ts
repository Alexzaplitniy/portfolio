import  * as developers from './developers.actions';
import { DeveloperInterface } from '../../models/developer/developer.interface';
import { createSelector } from 'reselect';

export interface State {
  loaded: boolean;
  loading: boolean;
  list: DeveloperInterface[];
  selectedDeveloper: string|null;
}

const initialState: State = {
  loaded: false,
  loading: false,
  list: [],
  selectedDeveloper: null
};

export function reducer(state = initialState, action: developers.Actions): State {
  switch (action.type) {
    case developers.LOAD:
      return {...state, loading: true};

    case developers.LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        list: action.payload
      };

    case developers.LOAD_FAIL:
      return state;

    case developers.SELECT:
      return {...state, selectedDeveloper: action.payload};

    case developers.ADD_DEVELOPER:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case developers.ADD_DEVELOPER_FAIL:
      return state;

    default:
      return state;
  }
}


export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getList = (state: State) => state.list;
export const getSelectedId = (state: State) => state.selectedDeveloper;
export const getSelected = createSelector(getList, getSelectedId, (list, slug) => {
  const item = list.filter(item => item.slug === slug);
  console.log(item, 'item');
  return item;
});
