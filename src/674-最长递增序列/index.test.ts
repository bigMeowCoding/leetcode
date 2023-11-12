// sum.test.js
import { expect, test } from "vitest";
import { findLengthOfLCIS } from "./index";

test("basic", () => {
  expect(findLengthOfLCIS("ababc")).toBe(3);
  expect(findLengthOfLCIS("abbba")).toBe(5);
  expect(findLengthOfLCIS("b")).toBe(1);
  expect(findLengthOfLCIS("bbb")).toBe(3);

});
