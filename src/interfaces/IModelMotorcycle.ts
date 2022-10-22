export interface IModelMotorcycle<T> {
  create(obj: T):Promise<T>,
  read():Promise<T[]>,
}
