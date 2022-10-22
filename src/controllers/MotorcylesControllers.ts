import { Request, Response } from 'express';
import { IServiceMotorcycle } from '../interfaces/IServiceMotorcycle';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IServiceMotorcycle<IMotorcycle>) { }

  public async create(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { model, year, color, buyValue, category, engineCapacity } = req.body;
    const car = { model, year, color, buyValue, category, engineCapacity };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.readOne(req.params.id);
    if (!result) return res.status(200).json(result);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const updated = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updated);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/39585973-a955-431a-a8ba-8401729a010a
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/controllers/Frame.ts