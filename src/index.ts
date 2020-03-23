export function doTheThing(): boolean {
  return true;
}

export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function fractionSum(fraction1: Fraction, fraction2: Fraction): Fraction {
  let numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator
  let denominator = fraction1.denominator * fraction2.denominator

  let commonDivisor = gcd(numerator, denominator);

  return {
    numerator: numerator / commonDivisor,
    denominator: denominator / commonDivisor
  };
}

export interface Fraction {
  numerator: number,
  denominator: number
}