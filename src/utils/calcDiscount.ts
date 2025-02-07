export function calcDiscount(price: number, isVIP: boolean): number {
  if (isVIP && price > 100) {
    return price * 0.8; // 20% discount
  }
  return price;
}
