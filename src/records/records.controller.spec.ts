import { Test, TestingModule } from '@nestjs/testing';
import { Mockify } from '../../test/mockify.types';
import * as data from '../data.json';
import { RecordsController } from './records.controller';
import { RecordDto } from './records.dto';
import { RecordsService } from './records.service';

const mockData: RecordDto[] = [...(data as RecordDto[])];

const newRecord: RecordDto = {
  name: 'New Entry',
  salary: '10000',
  currency: 'USD',
  department: 'Random',
  sub_department: 'Sub Random',
};

const mockRecordsService: Mockify<RecordsService> = {
  addRecord: jest.fn(),
  removeRecord: jest.fn(),
  getStatsSummary: jest.fn(),
  getStatsSummaryByDepartments: jest.fn(),
  getStatsSummaryOnContract: jest.fn(),
  getStatsSummaryBySubDepartments: jest.fn(),
};

describe('RecordsController', () => {
  let controller: RecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecordsController,
        { provide: RecordsService, useValue: mockRecordsService },
      ],
    }).compile();

    controller = module.get<RecordsController>(RecordsController);
  });

  describe('#add', () => {
    it('should add records', () => {
      controller.addRecord(newRecord);
      expect(mockRecordsService.addRecord).toBeCalledWith(newRecord);
    });
  });
  describe('#deleteRecord', () => {
    it('should remove record', () => {
      controller.deleteRecord(mockData[0]);
      expect(mockRecordsService.removeRecord).toBeCalledWith(mockData[0]);
    });
  });
  describe('#getFullStatsSummary', () => {
    it('should respond with stats summary', () => {
      controller.getFullStatsSummary();
      expect(mockRecordsService.getStatsSummary).toBeCalledWith();
    });
  });
  describe('#getStatsSummaryOnContract', () => {
    it('should respond with stats summary on contract', () => {
      controller.getStatsSummaryOnContract();
      expect(mockRecordsService.getStatsSummaryOnContract).toBeCalledWith();
    });
  });
  describe('#getStatsSummaryByDepartments', () => {
    it('should respond with stats summary by department', () => {
      controller.getStatsSummaryByDepartments();
      expect(mockRecordsService.getStatsSummaryByDepartments).toBeCalledWith();
    });
  });
  describe('#getStatsSummaryBySubDepartments', () => {
    it('should respond with stats summary by sub department', () => {
      controller.getStatsSummaryBySubDepartments();
      expect(
        mockRecordsService.getStatsSummaryBySubDepartments,
      ).toBeCalledWith();
    });
  });
});
