import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/CarsModels';
import { Model } from 'mongoose';
import {
	carsMock,
	carsMockWithId,
  carsMockForChange,
  carsMockForChangeWithId,
} from '../../mocks/carsMocks';
import { ErrorTypes } from '../../../errors/catalog';

describe('Cars Model', () => {
	const carsModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carsMockWithId);
		sinon.stub(Model, 'findOne').resolves(carsMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carsMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carsModel.create(carsMock);
			expect(newCar).to.be.deep.equal(carsMockWithId);
		});
	});

	describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carsModel.readOne('63541f24a9c17873ff1625cd');
			expect(carFound).to.be.deep.equal(carsMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carsModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidCarId);
			}
		});
	});
	
	describe('changing a car', () => {
		it('successfully changed', async () => {
			const carsChanged = await carsModel.update('63541f24a9c17873ff1625cd', carsMockForChange);
			expect(carsChanged).to.be.deep.equal(carsMockForChangeWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await carsModel.update('123ERRADO', carsMockForChange);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidCarId);
			}
		});
	});
	
});



// SOURCE 
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.1/glassesStore/src/tests/unit/models/frame.test.ts
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/tests/unit/models/frame.test.ts