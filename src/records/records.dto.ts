import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class RecordDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumberString()
  salary: string;
  @ApiProperty()
  @IsString()
  currency: string;
  @ApiProperty()
  @IsString()
  department: string;
  @ApiProperty()
  @IsString()
  sub_department: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  on_contract?: boolean;
}

export class StatsSummary {
  @ApiProperty()
  min: number;
  @ApiProperty()
  max: number;
  @ApiProperty()
  mean: number;
}

export class DepartmentStatsSummary implements Record<string, StatsSummary> {
  [x: string]: StatsSummary;
}

export class SubDepartmentStatsSummary
  implements Record<string, DepartmentStatsSummary>
{
  [x: string]: DepartmentStatsSummary;
}
