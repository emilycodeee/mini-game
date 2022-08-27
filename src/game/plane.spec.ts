import { expect, it, describe } from "vitest";

import { setupPlane, Plane } from "./plane";

describe("Plane", () => {
  describe("move", () => {
    const defaultOptions = {
      speed: 1,
      y: 0,
      x: 0,
    };

    it("moveDown", () => {
      const plane = setupPlane({}, { ...defaultOptions });
      plane.moveDown();
      expect(plane.y).toBe(1);
    });

    it("moveUp", () => {
      const plane = setupPlane({}, { ...defaultOptions });
      plane.moveUp();
      expect(plane.y).toBe(-1);
    });

    it("moveLeft", () => {
      const plane = setupPlane({}, { ...defaultOptions });
      plane.moveLeft();
      expect(plane.x).toBe(-1);
    });

    it("moveRight", () => {
      const plane = setupPlane({}, { ...defaultOptions });
      plane.moveRight();
      expect(plane.x).toBe(1);
    });
  });
});
