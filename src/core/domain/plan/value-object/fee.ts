const fees = {
  '011': {
    '016': 1.9,
    '017': 1.7,
    '018': 0.9,
  },
  '016': {
    '011': 2.9,
  },
  '017': {
    '011': 2.7,
  },
  '018': {
    '011': 1.9
  },
}
export class Fee {
  get value(): number {
    return fees[this.origin]?.[this.destination] ?? 0;
  }

  constructor(
    private readonly origin: string,
    private readonly destination: string
  ) {}
}
