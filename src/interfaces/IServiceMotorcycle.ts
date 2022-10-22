export interface IServiceMotorcycle<T> {
  create(obj: unknown):Promise<T>,
  // readOne(_id:string):Promise<T>,
  // update(id:string, body:unknown): Promise<T>;
  read():Promise<T[]>,
  // delete(_id:string):Promise<T>,
}

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/fb918573-d1f8-45c9-8bbe-230decd42318