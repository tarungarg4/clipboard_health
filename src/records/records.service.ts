import { Injectable } from '@nestjs/common';
import * as data from '../data.json';
import {
  DepartmentStatsSummary,
  RecordDto,
  StatsSummary,
  SubDepartmentStatsSummary,
} from './records.dto';

@Injectable()
export class RecordsService {
  construct() {}

  public addRecord(recordToAdd: RecordDto): void {
    if (data.findIndex((record) => record.name === recordToAdd.name) >= 0) {
      return;
    }
    data.push(recordToAdd as any);
    return;
  }

  public removeRecord(recordToRemove: RecordDto): void {
    data.splice(
      data.findIndex((record) => record.name === recordToRemove.name),
      1,
    );

    return;
  }

  private getMinMaxMean(numList: number[]): StatsSummary {
    const min = Math.min(...numList);
    const max = Math.max(...numList);
    const mean = numList.reduce((a, b) => a + b, 0) / numList.length;
    return { min, max, mean };
  }

  public getStatsSummary(): StatsSummary {
    const datas = data.map((node) => parseInt(node['salary']));
    return this.getMinMaxMean(datas);
  }
  public getStatsSummaryOnContract(): StatsSummary {
    const onContract = data.filter(
      (record) => Boolean(record.on_contract) === true,
    );
    const datas = onContract.map((node) => parseInt(node['salary']));
    return this.getMinMaxMean(datas);
  }

  public getStatsSummaryByDepartments(): DepartmentStatsSummary {
    const groups = this.groupBy(data, 'department');
    const result: DepartmentStatsSummary = {};
    for (let i in groups) {
      const datas = groups[i].map((node) => parseInt(node['salary']));
      result[i] = this.getMinMaxMean(datas);
    }

    return result;
  }
  public getStatsSummaryBySubDepartments(): SubDepartmentStatsSummary {
    const groups = this.groupBy(data, 'department');
    let result: SubDepartmentStatsSummary = {};
    for (let i in groups) {
      const subGroups = this.groupBy(groups[i], 'sub_department');
      if (!result[i]) result[i] = {};
      for (let j in subGroups) {
        const datas = subGroups[j].map((node) => parseInt(node['salary']));
        result[i][j] = this.getMinMaxMean(datas);
      }
    }

    return result;
  }

  private groupBy(records: any[], key: string): Record<string, any> {
    return records.reduce((acc, item) => {
      if (!acc[item[key]]) {
        acc[item[key]] = [];
      }
      acc[item[key]].push(item);
      return acc;
    }, {});
  }
}
