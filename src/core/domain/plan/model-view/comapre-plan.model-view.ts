import { Plan as PlanEnum } from '../enums/plan.enum';
import { Plan } from '../plan';


export class ComparePlanModelView {
  public readonly origin: string;
  public readonly destination: string;
  public readonly time: number;
  public readonly plans: PlanEnum[];
  public readonly values: number[];

  constructor(plans: Plan[]) {
    this.time = plans[0].time;
    this.origin = plans[0].origin;
    this.destination = plans[0].destination;

    this.plans = plans.map(plan => plan.plan);
    this.values = plans.map(plan => plan.value);
  }
}
