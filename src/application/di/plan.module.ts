import { Module, Provider } from '@nestjs/common';
import { PlanDiTokens } from 'src/core/domain/plan/di/plan-di.tokes';
import { ComparePlanUseService } from 'src/core/services/plan/compare-plan.service';
import { PlanController } from '../api/rest/controller/plan.controller';

const useCaseProviders: Provider[] = [
  {
    provide: PlanDiTokens.ComparePlanUseCase,
    useClass: ComparePlanUseService,
  },
];

@Module({
  controllers: [PlanController],
  providers: [...useCaseProviders],
})
export class PlanModule {}
