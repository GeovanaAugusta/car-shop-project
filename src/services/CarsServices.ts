import { IService } from '../interfaces/IService';
import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
// import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  // private _cars: IModel<ICar>;

  // Property '_cars' has no initializer and is not definitely assigned in the constructor.
  constructor(private _cars: IModel<ICar>) { }
  // this._cars = model;

  public async create(obj: unknown):Promise<ICar> {
    const parsed = ICarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._cars.create(parsed.data);
  }
}

export default CarsService;

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/fb918573-d1f8-45c9-8bbe-230decd42318