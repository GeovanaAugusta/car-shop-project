import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    category: String,
    engineCapacity: Number, 
  },
  { versionKey: false },
);

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('MotorcycleModel', motorcycleMongooseSchema)) {
    super(model);
  }
}

export default MotorcycleModel;

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/fa158180-d0d0-40d7-83bf-ff7c0c983b10/lesson/0d23dfa7-daf3-4490-89f4-916f03456093
// Remover __v https://stackoverflow.com/questions/13699784/mongoose-v-property-hide#:~:text=You%20can%20disable%20the%20%22__,%7D%2C%20%7B%20versionKey%3A%20false%20%7D)%3B