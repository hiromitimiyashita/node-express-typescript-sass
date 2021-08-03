import { Router, Request, Response } from 'express';

import * as PageController from '../controllers/PageController'

const router = Router();

router.get('/', PageController.index);
router.get('/sobre', PageController.sobre);

export default router;