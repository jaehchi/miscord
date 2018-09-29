import uuidV4 from 'uuid/V4';

import { signUpQuery } from './authQueries'; 
import { hashPassword } from '../../middleware/auth/bcrypt';
import { success, error } from '../../lib/logs';

export const signUpController = async (req, res) => {
  try {
    req.body.uuid = await uuidV4();
    req.body.password = await hashPassword(req.body.password);

    const data = await signUpQuery(req.body);

    success('controller - successfully signed up user :', JSON.stringify(data));

    return res.status(200).send(data);
  } catch (err) {
    error('controller - failed to sign up user:', err);
    return res.status(400).send('contoller - could not sign up user', err);
  }
};

export const loginController = async (req, res) => {

  try {
    
  } catch (err) {
  
  }
};