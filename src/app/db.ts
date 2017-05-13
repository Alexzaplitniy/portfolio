import { DBSchema } from '@ngrx/db';


/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
export const schema: DBSchema = {
  version: 1,
  name: 'portfolio_one_team_app',
  stores: {
    developers: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};
