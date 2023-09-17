// JavaScript program to calculate Distance Between
// Two Points on Earth

/**
 * Calculate distance between 2 coordinates. Reference: [Geek4Geeks](https://www.geeksforgeeks.org/program-distance-two-points-earth/)
 *
 * @param lat1 Latitute of the source
 * @param lon1 Longitude of the source
 * @param lat2 Latitude of the desination
 * @param lon2 Longitude of the destination
 * @returns Distance between the source and destination in kilometres
 */

export default function (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;
  const a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  const c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  const r = 6371;

  // calculate the result
  return c * r;
}
