import { ApiProperty } from '@nestjs/swagger';
import { Plan } from 'src/core/domain/plan/enums/plan.enum';
import { ComparePlanDto } from 'src/core/domain/plan/dto/compare-plan.dto';
import { IsArray, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ComparePlanBody implements ComparePlanDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  destination: string;

  @ApiProperty()
  time: number;

  @IsNotEmpty()
  @MinLength(2, {
    each: true,
  })
  @IsArray()
  @ApiProperty({ isArray: true, minItems: 2, enum: [Plan.NotPlan, Plan.FaleMais30, Plan.FaleMais60, Plan.FaleMais120] })
  plans: Plan[];
}
