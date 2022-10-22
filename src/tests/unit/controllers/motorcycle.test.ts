import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import MotorcylesControllers from '../../../controllers/MotorcylesControllers';
import MotorcylesModels from '../../../models/MotorcylesModels';
import MotorcylesServices from '../../../services/MotorcylesServices';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';


describe('Motorcycle Controller', () => {
  const motorcyclesModel = new MotorcylesModels()
  const motorcyclesService = new MotorcylesServices(motorcyclesModel);
  const motorcyclesController = new MotorcylesControllers(motorcyclesService);

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
      sinon.stub(motorcyclesService, 'create').resolves(motorcycleMock);
        
    })

    it('Success', async () => {

      req.body = motorcycleMock;
      await motorcyclesController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Read a Motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcyclesService, 'read').resolves([motorcycleMockWithId]);
    })
        it('Success', async () => {
          await motorcyclesController.read(req, res);
    
          expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
          expect((res.json as sinon.SinonStub).calledWith([motorcycleMockWithId])).to.be.true;
        });
      });

  describe('ReadOne Motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcyclesService, 'readOne').resolves(motorcycleMock);
    })

    it('Success', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcyclesController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Update motorcycle', () => {
    it('Success', async () => {
      sinon.stub(motorcyclesService, 'update').resolves(motorcycleMockWithId)

      await motorcyclesController.update(req, res)

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithId)).to.be.true;
    })
  })

  // describe('Delete Car', () => {
  //   it('Success', async () => {
  //     req.params = { id: carsMockWithId._id }
  //     await motorcyclesController.delete(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  //   });
  // });

});