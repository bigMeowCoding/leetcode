// sum.test.js
import { expect, test } from "vitest";
import { climbStairs } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
});
