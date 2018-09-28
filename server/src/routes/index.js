import { Router } from 'express';

import auth from '../components/auth/authRouter';

const router = Router();

router.use('/auth', auth);


export default router;