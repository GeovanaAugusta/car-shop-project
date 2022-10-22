import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarsModel from '../../../models/CarsModels';
import CarsServices from '../../../services/CarsServices';
import { carsMock, carsMockWithId, } from '../../mocks/carsMocks';

describe('Cars Service', () => {
	const carsModel = new CarsModel();
	const carsService = new CarsServices(carsModel);

	before(() => {
		sinon.stub(carsModel, 'create').resolves(carsMockWithId);
		sinon.stub(carsModel, 'readOne')
			.onCall(0).resolves(carsMockWithId)
			.onCall(1).resolves(null);

	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carsService.create(carsMock);

			expect(carCreated).to.be.deep.equal(carsMockWithId);
		});

		it('Failure', async () => {
			let error;

			try {
				await carsService.create({});
			} catch (err) {
				error = err;
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

	// describe('ReadOne Car', () => {
	// 	it('Success', async () => {
	// 		const frameCreated = await carsService.readOne('abobrinha');

	// 		expect(frameCreated).to.be.deep.equal(carsMockWithId);
	// 	});

	// 	it('Failure', async () => {
	// 		let error;

	// 		try {
  //       // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
	// 			await carsService.readOne(carsMockWithId._id);
	// 		} catch (err:any) {
	// 			error = err;
	// 		}

	// 		expect(error?.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
	// 	});
	// });

	// describe('Update Frame', () => {
	// 	it('Success', async () => {
	// 		sinon.stub(carsModel, 'update').resolves(carsMockWithId);

	// 		const updated = await carsService.update('any-id', carsMock);

	// 		expect(updated).to.be.deep.eq(carsMockWithId);

	// 		sinon.restore();
	// 	})
		
	// 	it('Failure - Zod', async () => {
	// 		let error;

	// 		try {
	// 			await carsService.update('any-id', { INVALID: "OBJECT" })
	// 		} catch(err) {
	// 			error = err;
	// 		}

	// 		expect(error).to.be.instanceOf(ZodError)
	// 	})

	// 	it('Failure - Frame not Found', async () => {
	// 		sinon.stub(carsModel, 'update').resolves(null);
	// 		let error: any;

	// 		try {
	// 			await frameService.update('any-id', carsMock)
	// 		} catch(err) {
	// 			error = err;
	// 		}

	// 		expect(error?.message).to.be.eq(ErrorTypes.EntityNotFound)
	// 	})
	// })

});