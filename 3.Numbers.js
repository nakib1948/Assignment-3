function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 101;
const isNumberPrime = isPrime(number);
console.log(isNumberPrime);
