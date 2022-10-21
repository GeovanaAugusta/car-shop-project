export interface IModel<T> {
  create(obj: T):Promise<T>,
  read():Promise<T[] | null>,
  readOne(_x: string):Promise<T | null>,
  update(_x: string, obj: T): Promise<T | null>,
  delete(_x: string): Promise<T | null>,
}

// export default IModel;
// A interface deve ser exportada com o nome de IModel e não deve ser exportada de forma padrão.

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/fa158180-d0d0-40d7-83bf-ff7c0c983b10/lesson/2558af70-0f71-4a52-b7ff-a4869882a4e8
