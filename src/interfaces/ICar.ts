import { z } from 'zod';
import { IVehicleZodSchema } from './IVehicle';

const ICarZodSchema = IVehicleZodSchema.extend({
  doorsQty: z.number().int().positive().gte(2)
    .lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = z.infer<typeof ICarZodSchema>;

export { ICarZodSchema };