import { Plan } from 'src/core/domain/plan/plan';
import {ComparePlanDto } from 'src/core/domain/plan/dto/compare-plan.dto';
import { ComparePlanModelView } from 'src/core/domain/plan/model-view/comapre-plan.model-view';
import { ComparePlanUseCase } from 'src/core/domain/plan/usecase/compare-plan.usecase';

export class ComparePlanUseService implements ComparePlanUseCase {
  execute(dto?: ComparePlanDto): ComparePlanModelView {
    const plans = dto.plans.map(plan => new Plan(
      dto.origin,
      dto.destination,
      dto.time,
      plan
    ));

    return new ComparePlanModelView(plans);
  }
}
