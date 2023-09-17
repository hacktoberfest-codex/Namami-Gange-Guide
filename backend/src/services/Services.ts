import Place from '../model/Place';
import {Place as PlaceType} from '../types/Types';
import calculateDistance from '../helpers/calculateDistance';
import mongoose from 'mongoose';

export const createPlace = async (
  name: string,
  about: string,
  place: PlaceType
) => {
  const data = await Place.create({
    name: name,
    about: about,
    location: place,
  });
  return data;
};

export const nearbyLocations = async (
  lat: number,
  lon: number,
  distance: number
) => {
  const options: mongoose.FilterQuery<typeof Place> = {
    location: {
      $near: {
        $geometry: {type: 'Point', coordinates: [lon, lat]},
        $minDistance: 0,
        $maxDistance: distance * 1000,
      },
    },
  };
  const data = await Place.find(options).then(response => {
    return JSON.stringify(response);
  });
  const jsonData = JSON.parse(data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  jsonData.forEach((d, index: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jsonData[index]['distance'] =
      calculateDistance(
        lat,
        lon,
        d.location.coordinates[1],
        d.location.coordinates[0]
      ) * 1000; //to convert it to metres
  });

  return jsonData;
};
