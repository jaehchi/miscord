import uuidV4 from 'uuid/v4';
import db from '../../config/database';
import { signUp, addPassword } from './authSQLHelpers';
import { success, error } from '../../lib/logs';

export const signUpQuery = async (body) => {
  try {
    // add username to users table, returns id
    const id = uuidV4();
    const userQuery = signUp(body, id);
    const { rows: [ { uuid } ] } = await db.queryAsync(userQuery);

    const pwQuery = addPassword(uuid, payload);
    await db.queryAsync(pwQuery);
    return;

    // adds password to credentials table
    // const passwordQuery = addPassword(uuid, payload);
    // await db.queryAsync(passwordQuery);
    // return 'Success. User added!';
  } catch (err) {
    error('queries - failed to add user to db', err);
    // new Error('queries - failed to add user to db');
  }
};