import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcylesModels from '../../../models/MotorcylesModels';
import MotorcylesServices from '../../../services/MotorcylesServices';
import { motorcycleMock, motorcycleMockWithId  } from '../../mocks/motorcycleMock';

describe('Motorcycles Service', () => {
	const motorcycleModel = new MotorcylesModels();
	const motorcyclesService = new MotorcylesServices(motorcycleModel);

	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null);
		// 	sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId])
			sinon.stub(motorcycleModel, 'update')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null);
		// 	sinon.stub(motorcycleModel, 'delete')
    // 	.onCall(0).resolves(motorcycleMockWithId)
    // 	.onCall(1).resolves(null);
			

	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Motorcycle', () => {
		it('Success', async () => {
			const carCreated = await motorcyclesService.create(motorcycleMock);

			expect(carCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			let error;

			try {
				await motorcyclesService.create({});
			} catch (err) {
				error = err;
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

	// describe('Read a Motorcycles', () => {
	// 			it('Success', async () => {
	// 				const motorcycles = await motorcyclesService.read();
	// 				expect(motorcycles).to.be.deep.equal([motorcycleMockWithId]);
	// 			});
	// 		});

	describe('ReadOne Motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcyclesService.readOne('abobrinha');

			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			let error;

			try {
				await motorcyclesService.readOne(motorcycleMockWithId._id);
			} catch (err:any) {
				error = err;
			}

			expect(error?.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Motorcycle', () => {
		// it('Success', async () => {
		// 	sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockWithId);

		// 	const updated = await motorcyclesService.update('any-id', motorcycleMock);

		// 	expect(updated).to.be.deep.eq(motorcycleMockWithId);

		// 	sinon.restore();
		// })
		
		it('Failure - Zod', async () => {
			let error;

			try {
				await motorcyclesService.update('any-id', { INVALID: "OBJECT" })
			} catch(err) {
				error = err;
			}

			expect(error).to.be.instanceOf(ZodError)
		})

		// it('Failure - Motorcycle not Found', async () => {
		// 	sinon.stub(motorcycleModel, 'update').resolves(null);
		// 	let error: any;

		// 	try {
		// 		await motorcyclesService.update('any-id', motorcycleMock)
		// 	} catch(err) {
		// 		error = err;
		// 	}

		// 	expect(error?.message).to.be.eq(ErrorTypes.EntityNotFound)
		// })
	})

	// describe('Delete Frame', () => {
	// 	it('Success', async () => {
	// 		const frames = await motorcyclesService.delete(motorcycleMockWithId._id);
	// 		expect(frames).to.be.deep.equal(motorcycleMockWithId);
	// 	});

	// 	it('Failure', async () => {
  //     let error;
	// 		try {
	// 			await motorcyclesService.delete(motorcycleMockWithId._id);
	// 		} catch (err: any) {
  //       error = err
	// 		}
  //     expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
	// 	});
	// });

});