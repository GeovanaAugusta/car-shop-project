import { IServiceMotorcycle } from '../interfaces/IServiceMotorcycle';
import { IMotorcycle, IMotorcycleSchema } from '../interfaces/IMotorcycle';
import { IModelMotorcycle } from '../interfaces/IModelMotorcycle';
import { ErrorTypes } from '../errors/catalog';

class MotorcyclesService implements IServiceMotorcycle<IMotorcycle> {
  constructor(private _motorcycles: IModelMotorcycle<IMotorcycle>) { }

  public async create(obj: unknown):Promise<IMotorcycle> {
    const parsed = IMotorcycleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycles.create(parsed.data);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycles.read();
    return motorcycles;
  }

  public async readOne(_id: string):Promise<IMotorcycle> {
    const motorcycle = await this._motorcycles.readOne(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycle;
  }
}

export default MotorcyclesService;

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/fb918573-d1f8-45c9-8bbe-230decd42318
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/services/Frame.ts