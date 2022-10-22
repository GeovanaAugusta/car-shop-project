export interface IModelMotorcycle<T> {
  create(obj: T):Promise<T>,
  read():Promise<T[]>,
  readOne(_x: string):Promise<T | null>,
}
