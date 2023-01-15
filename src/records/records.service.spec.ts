import { Test, TestingModule } from '@nestjs/testing';
import * as data from '../data.json';
import {
  DepartmentStatsSummary,
  RecordDto,
  StatsSummary,
  SubDepartmentStatsSummary,
} from './records.dto';
import { RecordsService } from './records.service';

const mockData: RecordDto[] = [...(data as RecordDto[])];

describe('RecordsService', () => {
  let service: RecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordsService],
    }).compile();

    service = module.get<RecordsService>(RecordsService);
  });

  describe('#getFullStatsSummary', () => {
    it('should respond with stats summary', () => {
      const ExpectedResult: StatsSummary = {
        min: 30,
        max: 200000000,
        mean: 22295010,
      };
      const response = service.getStatsSummary();
      expect(response).toStrictEqual(ExpectedResult);
    });
  });
  describe('#getStatsSummaryOnContract', () => {
    it('should respond with stats summary on contract', () => {
      const ExpectedResult: StatsSummary = {
        min: 90000,
        max: 110000,
        mean: 100000,
      };
      const response = service.getStatsSummaryOnContract();
      expect(response).toStrictEqual(ExpectedResult);
    });
  });
  describe('#getStatsSummaryByDepartments', () => {
    it('should respond with stats summary by department', () => {
      const ExpectedResult: DepartmentStatsSummary = {
        Engineering: {
          min: 30,
          max: 200000000,
          mean: 40099006,
        },
        Banking: {
          min: 90000,
          max: 90000,
          mean: 90000,
        },
        Operations: {
          min: 30,
          max: 70000,
          mean: 35015,
        },
        Administration: {
          min: 30,
          max: 30,
          mean: 30,
        },
      };
      const response = service.getStatsSummaryByDepartments();
      expect(response).toStrictEqual(ExpectedResult);
    });
  });
  describe('#getStatsSummaryBySubDepartments', () => {
    it('should respond with stats summary by sub department', () => {
      const ExpectedResult: SubDepartmentStatsSummary = {
        Engineering: {
          Platform: {
            min: 30,
            max: 200000000,
            mean: 40099006,
          },
        },
        Banking: {
          Loan: {
            min: 90000,
            max: 90000,
            mean: 90000,
          },
        },
        Operations: {
          CustomerOnboarding: {
            min: 30,
            max: 70000,
            mean: 35015,
          },
        },
        Administration: {
          Agriculture: {
            min: 30,
            max: 30,
            mean: 30,
          },
        },
      };
      const response = service.getStatsSummaryBySubDepartments();
      expect(response).toStrictEqual(ExpectedResult);
    });
  });
});
