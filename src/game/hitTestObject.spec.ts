import { describe, it, expect, vi } from "vitest";
import { hitTestObject } from "./hitTestObject";

describe("hitTestObject", () => {
  it("兩個矩形相交，則返回true", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };

    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    };

    const r = hitTestObject(rectA, rectB);

    expect(r).toBe(true);
  });
  it("兩個矩形不相交，則返回false", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };

    const rectB = {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
    };

    const r = hitTestObject(rectA, rectB);

    expect(r).toBe(false);
  });
});
