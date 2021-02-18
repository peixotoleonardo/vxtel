import { Plan as PlanEnum, PlanTimeValue } from './enums/plan.enum';
import { Fee } from './value-object/fee';

export class Plan {
  origin: string;
  destination: string;
  time: number;
  plan: PlanEnum;
  value: number;
  fee: Fee;

  constructor(origin: string, destination: string, time: number, plan: PlanEnum) {
    this.origin = origin;
    this.destination = destination;
    this.time = time;
    this.plan = plan;

    this.fee = new Fee(this.origin, this.destination);

    this.calculate();
  }

  private calculate(): void {
    const overTimeInMinutes = this.calculateOverTimeInMinutes();
    const value = overTimeInMinutes * this.fee.value;

    this.value = value + this.calculateAccrualRate(value)
  }

  private calculateOverTimeInMinutes(): number {
    return Math.max(this.time - PlanTimeValue[this.plan], 0);
  }

  private calculateAccrualRate(value: number): number {
    if (this.plan !== PlanEnum.NotPlan) {
      return value * 0.1;
    }

    return 0;
  }
}
