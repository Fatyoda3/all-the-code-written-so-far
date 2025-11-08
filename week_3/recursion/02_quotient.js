function quotient(dividend, divisor) {
  let n = 0;
  if (dividend === 0) {
    return 0;
  }
  n += 1;
  return n + quotient(dividend - divisor, divisor);
}
