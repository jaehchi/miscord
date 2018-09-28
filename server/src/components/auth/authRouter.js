import { Router } from 'express';
import validate from 'express-validation';

import { signUpController } from "./authControllers";
import { signUp, login } from "../../middleware/validation/joi";

const router = Router();

router.route('/signUp').post(validate(signUp), signUpController);

// router
//   .route('/login')
//   .post(
//     validate(formValidation.login),
//     passport.authenticate('local', { session: false }),
//     loginController
//   );

export default router;