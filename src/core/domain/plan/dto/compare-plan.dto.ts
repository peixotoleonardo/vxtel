import { Plan } from "src/core/domain/plan/enums/plan.enum";

export interface ComparePlanDto {
  origin: string;

  destination: string;

  time: number;

  plans: Plan[];
}
