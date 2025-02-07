import { calcDiscount } from "../src/utils/calcDiscount.js";
import { describe, it, expect } from "vitest";

describe("calcDiscount", () => {
  it("returns price if not VIP or price <= 100", () => {
    expect(calcDiscount(80, false)).toBe(80);
    expect(calcDiscount(150, false)).toBe(150);
    expect(calcDiscount(100, true)).toBe(100); // VIP but price=100 => no discount
  });

  it("applies discount if VIP and price > 100", () => {
    expect(calcDiscount(200, true)).toBe(160); // 20% off
  });
});
