import {Router} from 'express';
import {
  createDestination,
  createLocation,
  updateLocation,
} from '../controller/Controller';

const router = Router();

router.post('/updateLocation', updateLocation);

router.post('/createLocation', createLocation);

router.post('/createDestination', createDestination);

export default router;
