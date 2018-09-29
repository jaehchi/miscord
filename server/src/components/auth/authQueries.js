import db from '../../config/database';
import { signUp, addPassword } from './authSQLHelpers';
import { success, error } from '../../lib/logs';

export const signUpQuery = async (body) => {
  try {
    const userQuery = signUp(body);
    const passwordQuery = addPassword(body.uuid, body.password);
    
    // add username to users table, returns uuid, email, password
    const { rows } = await db.queryAsync(userQuery);
    
    // adds hashed password to credentials table,
    await db.queryAsync(passwordQuery);
    
    success('signup query - added user to db', rows[0]);
    return rows[0];
  } catch (err) {
    error('queries - failed to add user to db', err);
    new Error('queries - failed to add user to db');
  }
};