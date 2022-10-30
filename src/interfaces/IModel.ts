export interface IModel<T> {
  create(obj: T):Promise<T>,
  read():Promise<T[]>,
  readOne(_x: string):Promise<T | null>,
  update(_x: string, obj: T): Promise<T | null>,
  delete(_x: string): Promise<T | null>,
}
