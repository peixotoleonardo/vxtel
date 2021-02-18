export enum Plan {
  NotPlan = 'Sem Plano',
  FaleMais30 = 'FaleMais 30',
  FaleMais60 = 'FaleMais 60',
  FaleMais120 = 'FaleMais 120',
}

export const PlanTimeValue = {
  [Plan.NotPlan]: 0,
  [Plan.FaleMais30]: 30,
  [Plan.FaleMais60]: 60,
  [Plan.FaleMais120]: 120,
}
