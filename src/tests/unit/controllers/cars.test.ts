import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import CarsControllers from '../../../controllers/CarsControllers';
import CarsModel from '../../../models/CarsModels';
import CarsService from '../../../services/CarsServices';
import {carsMock,	carsMockWithId, } from '../../mocks/carsMocks';


describe('Cars Controller', () => {
  const carsModel = new CarsModel()
  const carsService = new CarsService(carsModel);
  const carsController = new CarsControllers(carsService);

  const req = {} as Request; 

  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'create').resolves(carsMock);
        
    })

    it('Success', async () => {

      req.body = carsMock;
      await carsController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carsMock)).to.be.true;
    });
  });

  describe('Read Car', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'read').resolves([carsMockWithId]);
    })
        it('Success', async () => {
          await carsController.read(req, res);
    
          expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
          expect((res.json as sinon.SinonStub).calledWith([carsMockWithId])).to.be.true;
        });
      });

  describe('ReadOne Car', () => {
    beforeEach(() => {
      sinon.stub(carsService, 'readOne').resolves(carsMock);
    })

    it('Success', async () => {
      req.params = { id: carsMockWithId._id };
      await carsController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });

  describe('Update Car', () => {
    it('Success', async () => {
      sinon.stub(carsService, 'update').resolves(carsMockWithId)

      await carsController.update(req, res)

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
    })
  })

  // describe('Delete Car', () => {
  //   it('Success', async () => {
  //     req.params = { id: carsMockWithId._id }
  //     await carsController.delete(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carsMockWithId)).to.be.true;
  //   });
  // });

});