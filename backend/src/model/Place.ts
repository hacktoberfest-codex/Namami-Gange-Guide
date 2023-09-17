import {Schema, model} from 'mongoose';

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const placeSchema = new Schema(
  {
    name: String,
    about: String,
    location: {
      type: pointSchema,
      required: true,
      index: '2dsphere',
    },
  },
  {collection: 'place'}
);

export default model('Place', placeSchema, 'place');
