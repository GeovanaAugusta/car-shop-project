import { IVehicle } from './IVehicle';

export interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,

}

// export default IModel;
// A interface deve ser exportada com o nome de IModel e não deve ser exportada de forma padrão.
