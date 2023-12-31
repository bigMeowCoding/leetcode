// sum.test.js
import { expect, test } from "vitest";
import { coinChange } from "./index";

test("basic", () => {
  expect(coinChange([1,2,5], 11)).toBe(3);
  expect(coinChange([2], 3)).toBe(-1);
  expect(coinChange([1], 0)).toBe(0);

  expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
});
