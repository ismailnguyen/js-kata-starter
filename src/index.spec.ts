import { doTheThing, fractionSum, Fraction, gcd } from ".";

describe("Test of the test framework", function () {
  it("Should pass", function () {
    expect(doTheThing()).toEqual(true);
  });
});

describe("Simple cases (without simplification, and only common denominators)", function () {
  it("0/1 + 0/1 should give 0/1", function () {

    const zero = {
      numerator: 0,
      denominator: 1
    }

    expect(fractionSum(zero, zero)).toEqual(zero);
  });

  it("1/7 + 2/7 should give 3/7", function () {

    const oneSeventh: Fraction = {
      numerator: 1,
      denominator: 7
    }

    const twoSeventh = {
      numerator: 2,
      denominator: 7
    }

    const threeSeventh = {
      numerator: 3,
      denominator: 7
    }

    expect(fractionSum(oneSeventh, twoSeventh)).toEqual(threeSeventh);
  });
});

describe("Fraction with different denominator without simplification", function () {
  it("1/3 + 1/5 should give 8/15", function () {

    const oneThird: Fraction = {
      numerator: 1,
      denominator: 3
    }

    const oneFifth: Fraction = {
      numerator: 1,
      denominator: 5
    }

    const eightFifteenth: Fraction = {
      numerator: 8,
      denominator: 15
    }

    expect(fractionSum(oneThird, oneFifth)).toEqual(eightFifteenth);
  });
});

describe("Fraction with simplification", function () {
  it("1/6 + 1/10 should give 4/15", function () {

    const oneSixth: Fraction = {
      numerator: 1,
      denominator: 6
    }

    const oneTenth: Fraction = {
      numerator: 1,
      denominator: 10
    }

    const fourFifteenth: Fraction = {
      numerator: 4,
      denominator: 15
    }

    expect(fractionSum(oneSixth, oneTenth)).toEqual(fourFifteenth);
  });

  it("1/2 + 1/2 should give 1/1", function () {

    const oneHalf: Fraction = {
      numerator: 1,
      denominator: 2
    }

    const one: Fraction = {
      numerator: 1,
      denominator: 1
    }

    expect(fractionSum(oneHalf, oneHalf)).toEqual(one);
  });
});

describe("GCD", function () {

  interface TestParameter {
    a: number,
    b: number,
    expected: number
  }

  const parameters: TestParameter[] = [
    {
      a: 1,
      b: 1,
      expected: 1
    },
    {
      a: 6,
      b: 10,
      expected: 2
    },
    {
      a: 16,
      b: 60,
      expected: 4
    }
  ]

  parameters.forEach(({ a, b, expected }) => {
    it(`GCD of ${a} and ${b} should be ${expected}`, function () {
      expect(gcd(a, b)).toEqual(expected);
    });
  });
});
