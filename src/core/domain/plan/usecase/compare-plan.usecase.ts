import { UseCase } from 'src/core/common/usecase';
import { ComparePlanDto } from '../dto/compare-plan.dto';
import { ComparePlanModelView } from '../model-view/comapre-plan.model-view';

export interface ComparePlanUseCase extends UseCase<ComparePlanDto, ComparePlanModelView> {}
