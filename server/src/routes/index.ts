import { Router } from 'express';
import { sayHello } from '../controllers/hello.controller';
import { logger } from '../middlewares/logger.middleware';

const router = Router();

router.use(logger);
router.get('/', sayHello);

export default router;