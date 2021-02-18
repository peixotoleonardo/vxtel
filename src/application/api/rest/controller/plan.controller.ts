import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from 'src/core/common/api/core-api-response';
import { PlanDiTokens } from 'src/core/domain/plan/di/plan-di.tokes';
import { ComparePlanModelView } from 'src/core/domain/plan/model-view/comapre-plan.model-view';
import { ComparePlanUseCase } from 'src/core/domain/plan/usecase/compare-plan.usecase';
import { ComparePlanBody } from '../dto/plan/compare-plan.body';

@ApiTags('Plan')
@Controller('plans')
export class PlanController {
  constructor(
    @Inject(PlanDiTokens.ComparePlanUseCase)
    private readonly comparePlanUseCase: ComparePlanUseCase
  ) {}

  @Post('compare')
  @ApiOperation({ summary: 'Compare values between plans' })
  @UsePipes(new ValidationPipe({ transform: true }))
  compare(@Body() calculatePlan: ComparePlanBody): CoreApiResponse<ComparePlanModelView> {
    return CoreApiResponse.success(this.comparePlanUseCase.execute(calculatePlan));
  }
}
