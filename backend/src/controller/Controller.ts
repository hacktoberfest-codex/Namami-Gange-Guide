import {Request, Response} from 'express';

import {Place} from '../types/Types';
import {createPlace, nearbyLocations} from '../services/Services';
import responseSchema from '../helpers/responseSchema';

export const updateLocation = async (req: Request, res: Response) => {
  const {lat, lon, distance = 1} = req.body;
  try {
    const data = await nearbyLocations(lat, lon, distance);
    return res.json(responseSchema(true, data));
  } catch (error) {
    return res.json(responseSchema(false, error));
  }
};

export const createLocation = async (req: Request, res: Response) => {
  const {name, about, lat, long} = req.body;
  try {
    const place: Place = {type: 'Point', coordinates: [long, lat]};
    const data = await createPlace(name, about, place);

    return res.json(responseSchema(true, data));
  } catch (error) {
    return res.json(responseSchema(false, error));
  }
};

export const createDestination = async (req: Request, res: Response) => {
  res.json(responseSchema(true, req.body));
};
