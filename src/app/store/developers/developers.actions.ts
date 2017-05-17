import { Action } from '@ngrx/store';
import { DeveloperInterface } from '../../models/developer/developer.interface';

/**
 * Load Developers Actions
 */
export const LOAD =         '[Developers] Load';
export const LOAD_SUCCESS = '[Developers] Load Success';
export const LOAD_FAIL =    '[Developers] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: DeveloperInterface[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}


/**
 * Selected Developers Actions
 */
export const SELECT = '[Developers] Select';

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}


/**
 * Add developer Actions
 */
export const ADD_DEVELOPER =         '[Developers] Add developer';
export const ADD_DEVELOPER_SUCCESS = '[Developers] Add developer Success';
export const ADD_DEVELOPER_FAIL =    '[Developers] Add developer Fail';

export class AddDeveloperAction implements Action {
  readonly type = ADD_DEVELOPER;

  constructor(public payload: DeveloperInterface) {}
}

export class AddDeveloperSuccessAction implements Action {
  readonly type = ADD_DEVELOPER_SUCCESS;

  constructor(public payload: DeveloperInterface) {}
}

export class AddDeveloperFailAction implements Action {
  readonly type = ADD_DEVELOPER_FAIL;

  constructor(public payload: DeveloperInterface) {}
}



export type Actions
  = AddDeveloperAction
  | AddDeveloperSuccessAction
  | AddDeveloperFailAction
  | SelectAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
