import Joi from 'joi';

export const signUp = {
  body: {
    username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  }
};

// export const login = {
//   body: {
//     username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
//   }
// };