import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleMock: IMotorcycle = {
	"model": "Honda CG Titan 125",
	"year": 1963,
	"color": "red",
	"buyValue": 3500,
	"category":  'Street',
	"engineCapacity": 125,
};

const motorcycleMockWithId: IMotorcycle & { _id: string } = {
	_id: '6354557016f96126b32842f9',
	"model": "Honda CG Titan 125",
	"year": 1963,
	"color": "red",
	"buyValue": 3500,
	"category": 'Street',
	"engineCapacity": 125,
};

const motorcycleMockForChange: IMotorcycle = {
	"model": "Ferrari Maranelloo",
	"year": 1964,
	"color": "purple",
	"buyValue": 3500,
	"category": 'Custom',
	"engineCapacity": 3,
};

const motorcycleMockForChangeWithId: IMotorcycle & { _id: string } = {
	_id: '6354557016f96126b32842f9',
	"model": "Ferrari Maranelloo",
	"year": 1964,
	"color": "purple",
	"buyValue": 3500,
	"category": 'Custom',
	"engineCapacity": 3,
};


export {
	motorcycleMock,
	motorcycleMockWithId,
  motorcycleMockForChange,
  motorcycleMockForChangeWithId,
};

// SOURCE
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.1/glassesStore/src/tests/mocks/frameMock.ts
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/tests/mocks/frameMock.ts