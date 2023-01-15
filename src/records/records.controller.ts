import { Body, Controller, Delete, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  DepartmentStatsSummary,
  RecordDto,
  StatsSummary,
  SubDepartmentStatsSummary,
} from './records.dto';
import { RecordsService } from './records.service';

@Controller('records')
@UseGuards(JwtAuthGuard)
@ApiTags('Records')
@ApiBearerAuth()
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Put('add')
  @ApiOkResponse()
  addRecord(@Body() body: RecordDto): void {
    this.recordsService.addRecord(body);
  }

  @Delete('delete')
  @ApiOkResponse()
  deleteRecord(@Body() body: RecordDto): void {
    this.recordsService.removeRecord(body);
  }

  @Get('summary')
  @ApiOkResponse({ type: StatsSummary })
  getFullStatsSummary(): StatsSummary {
    return this.recordsService.getStatsSummary();
  }

  @Get('contract/summary')
  @ApiOkResponse({ type: StatsSummary })
  getStatsSummaryOnContract(): StatsSummary {
    return this.recordsService.getStatsSummaryOnContract();
  }

  @Get('department/summary')
  @ApiOkResponse({ type: DepartmentStatsSummary })
  getStatsSummaryByDepartments(): DepartmentStatsSummary {
    return this.recordsService.getStatsSummaryByDepartments();
  }

  @Get('subdepartment/summary')
  @ApiOkResponse({ type: SubDepartmentStatsSummary })
  getStatsSummaryBySubDepartments(): SubDepartmentStatsSummary {
    return this.recordsService.getStatsSummaryBySubDepartments();
  }
}
