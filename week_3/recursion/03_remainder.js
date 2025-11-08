function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}