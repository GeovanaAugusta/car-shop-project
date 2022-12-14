import { expect } from 'chai';
import sinon from 'sinon';
import MotorcylesModels from '../../../models/MotorcylesModels';
import { Model } from 'mongoose';
import {	motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Motorcycle Model', () => {
	const motorcyclesModel = new MotorcylesModels();

	before(() => {
		sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
	// 	sinon.stub(Model, 'findByIdAndUpdate').resolves(carsMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a motorcycle', () => {
		it('successfully created', async () => {
			const newMotorcycle = await motorcyclesModel.create(motorcycleMock);
			expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
		});
	});

	describe('searching a motorcycle', () => {
		it('successfully found', async () => {
			const motorcycleFound = await motorcyclesModel.readOne('63541f24a9c17873ff1625cd');
			expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motorcyclesModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
	
	// describe('changing a car', () => {
	// 	it('successfully changed', async () => {
	// 		const carsChanged = await motorcyclesModel.update('63541f24a9c17873ff1625cd', carsMockForChange);
	// 		expect(carsChanged).to.be.deep.equal(carsMockForChangeWithId);
	// 	});
	
	// 	it('_id not found to change', async () => {
	// 		try {
	// 			await motorcyclesModel.update('123ERRADO', carsMockForChange);
	// 		} catch (error:any) {
	// 			expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
	// 		}
	// 	});
	// });
	
});



// SOURCE 
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.1/glassesStore/src/tests/unit/models/frame.test.ts
// https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/30.2/glassesStore/src/tests/unit/models/frame.test.ts