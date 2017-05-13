import  * as developers from './developers.actions';
import { DeveloperInterface } from '../../models/developer/developer.interface';

export interface State {
  loaded: boolean;
  loading: boolean;
  list: DeveloperInterface[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  list: []
};

export function reducer(state = initialState, action: developers.Actions): State {
  switch (action.type) {
    case developers.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case developers.LOAD_SUCCESS: {
      const data = action.payload;

      return {
        loaded: true,
        loading: false,
        list: data
      };
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getList = (state: State) => state.list;