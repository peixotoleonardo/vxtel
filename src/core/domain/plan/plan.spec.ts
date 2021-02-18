import { Plan } from "./plan";
import { Plan as PlanEnum } from './enums/plan.enum';


const cases = [
  {
    time: 20,
    from: '011',
    to: '016',
    plan: PlanEnum.FaleMais30,
    expect: 0,
  },
  {
    time: 20,
    from: '011',
    to: '016',
    plan: PlanEnum.NotPlan,
    expect: 38,
  },
  {
    time: 80,
    from: '011',
    to: '017',
    plan: PlanEnum.FaleMais60,
    expect: 37.40
  },
  {
    time: 80,
    from: '011',
    to: '017',
    plan: PlanEnum.NotPlan,
    expect: 136
  },
  {
    time: 200,
    from: '018',
    to: '011',
    plan: PlanEnum.FaleMais120,
    expect: 167.20
  },
  {
    time: 200,
    from: '018',
    to: '011',
    plan: PlanEnum.NotPlan,
    expect: 380
  },
];

describe('Plan', () => {
  describe('constructor', () => {
    cases.forEach(options => {
      it(`value of ${options.time} minute call from ${options.from} to ${options.to} on the "${options.plan}" should be equal 0 `, () => {
        const plan = new Plan(options.from, options.to, options.time, options.plan);

        expect(plan.value).toBe(options.expect);
      });
    })
  })
});
