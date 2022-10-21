import { z } from 'zod';

const IVehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().int().positive().gte(1900)
    .lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof IVehicleZodSchema>;
export { IVehicleZodSchema };

// export default IModel;
// A interface deve ser exportada com o nome de IModel e não deve ser exportada de forma padrão.

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/fa158180-d0d0-40d7-83bf-ff7c0c983b10/lesson/a1f2229e-92a6-4779-8e53-589e7cf4a5ea
// https://github.com/colinhacks/zod
// Mentoria tudinho