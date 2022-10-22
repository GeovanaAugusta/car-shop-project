import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import MotorcylesControllers from '../../../controllers/MotorcylesControllers';
import MotorcylesModels from '../../../models/MotorcylesModels';
import MotorcylesServices from '../../../services/MotorcylesServices';
import { motorcycleMock } from '../../mocks/motorcycleMock';


describe('Motorcycle Controller', () => {
  const carsModel = new MotorcylesModels()
  const carsService = new MotorcylesServices(carsModel);
  const carsController = new MotorcylesControllers(carsService);

  const req = {} as Request; 

  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore()
  })

  describe('Create a Motorcycle', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'create').resolves(motorcycleMock);
        
    })

    it('Success', async () => {

      req.body = motorcycleMock;
      await carsController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });
  });

  // describe('Read Car', () => {
  //   beforeEach(() => {
  //     sinon.stub(carsService, 'read').resolves([carsMockWithId]);
  //   })
  //       it('Success', async () => {
  //         await carsController.read(req, res);
    
  //         expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //         expect((res.json as sinon.SinonStub).calledWith([carsMockWithId])).to.be.true;
  //       });
  //     });

  // describe('ReadOne Car', () => {
  //   beforeEach(() => {
  //     sinon.stub(carsService, 'readOne').resolves(carsMock);
  //   })

  //   it('Success', async () => {
  //     req.params = { id: carsMockWithId._id };
  //     await carsController.readOne(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
  //   });
  // });

  // describe('Update Car', () => {
  //   it('Success', async () => {
  //     sinon.stub(carsService, 'update').resolves(carsMockWithId)

  //     await carsController.update(req, res)

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  //   })
  // })

  // describe('Delete Car', () => {
  //   it('Success', async () => {
  //     req.params = { id: carsMockWithId._id }
  //     await carsController.delete(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  //   });
  // });

});