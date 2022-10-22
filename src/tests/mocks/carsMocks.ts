import { ICar } from '../../interfaces/ICar';

const carsMock: ICar = {
	"model": "Ferrari Maranello",
	"year": 1963,
	"color": "red",
	"buyValue": 3500000,
	"doorsQty": 2,
	"seatsQty": 2,
};

const carsMockWithId: ICar & { _id: string } = {
	_id: '63541f24a9c17873ff1625cd',
	"model": "Ferrari Maranello",
	"year": 1963,
	"color": "red",
	"buyValue": 3500000,
	"doorsQty": 2,
	"seatsQty": 2,
};

const carsMockForChange: ICar = {
	"model": "Ferrari Maranelloo",
	"year": 1964,
	"color": "purple",
	"buyValue": 35000000,
	"doorsQty": 3,
	"seatsQty": 3,
};

const carsMockForChangeWithId: ICar & { _id: string } = {
	_id: '63541f24a9c17873ff1625cd',
	"model": "Ferrari Maranelloo",
	"year": 1964,
	"color": "purple",
	"buyValue": 35000000,
	"doorsQty": 3,
	"seatsQty": 3,
};


export {
	carsMock,
	carsMockWithId,
  carsMockForChange,
  carsMockForChangeWithId,
};

// SOURCE
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.1/glassesStore/src/tests/mocks/frameMock.ts
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/tests/mocks/frameMock.ts