import { z } from 'zod';
import { IVehicleZodSchema } from './IVehicle';

const IMotorcycleSchema = IVehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

export type IMotorcycle = z.infer<typeof IMotorcycleSchema>;
export { IMotorcycleSchema };