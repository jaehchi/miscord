import { signUpQuery } from './authQueries'; 
import { success, error } from '../../lib/logs';

export const signUpController = async (req, res) => {
  try {
    console.log('hi')
    const data = await signUpQuery(req.body);
    // success('controller - successfully signed up user :', req.body.username);

    return res.status(200).send(data);
  } catch (err) {
    // error('controller - failed to sign up user:', err);
    return res.status(400).send('contoller - could not sign up user', err);
  }
};

export const loginController = async (req, res) => {

  try {
    
  } catch (err) {
  
  }
}