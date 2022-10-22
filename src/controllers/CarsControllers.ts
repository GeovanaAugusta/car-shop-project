import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request,
    res: Response<ICar>,
  ) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const car = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
}

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/39585973-a955-431a-a8ba-8401729a010a