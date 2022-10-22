export enum ErrorTypes { 
  InvalidCarId = 'InvalidCarId',
  CarNotFound = 'CarNotFound',
}

type ErrorResponseObject = { 
  error: string;
  httpStatus: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  CarNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidCarId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/00cac015-dc6b-4486-965a-242137f13330