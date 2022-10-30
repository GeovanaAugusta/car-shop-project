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

  public async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    const parsed = IMotorcycleSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._motorcycles.update(_id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.EntityNotFound);
    }

    return updated;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycles.delete(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycle;
  }
}

export default MotorcyclesService;
