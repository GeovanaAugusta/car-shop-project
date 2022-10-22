import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) { this._model = model; }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }
  
  // Property 'read' in type 'MongoModel<T>' is not assignable to the same property in base type 'IModel<T>'.
  // Type '() => Promise<T[] | null>' is not assignable to type '() => Promise<T[]>'.
  // Type 'Promise<T[] | null>' is not assignable to type 'Promise<T[]>'.
  //   Type 'T[] | null' is not assignable to type 'T[]'.
  // Type 'null' is not assignable to type 'T[]'.

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/fa158180-d0d0-40d7-83bf-ff7c0c983b10/lesson/2558af70-0f71-4a52-b7ff-a4869882a4e8
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/models/MongoModel.ts
// Dia 01 - Exercícios 3 e 6 para adicionar os métodos na MongoModel