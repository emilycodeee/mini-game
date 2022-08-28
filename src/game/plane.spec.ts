import { expect, it, describe } from "vitest";
import { Bullet } from "./bullet";

import { setupPlane, Plane } from "./plane";

describe("Plane", () => {
  describe("move", () => {
    const defaultOptions = {
      speed: 1,
      y: 0,
      x: 0,
    };
    function createPlane() {
      return setupPlane({}, [], { ...defaultOptions });
    }
    it("moveDown", () => {
      const plane = createPlane();
      plane.moveDown();
      expect(plane.y).toBe(1);
    });

    it("moveUp", () => {
      const plane = createPlane();
      plane.moveUp();
      expect(plane.y).toBe(-1);
    });

    it("moveLeft", () => {
      const plane = createPlane();
      plane.moveLeft();
      expect(plane.x).toBe(-1);
    });

    it("moveRight", () => {
      const plane = createPlane();
      plane.moveRight();
      expect(plane.x).toBe(1);
    });
  });
});

describe("Attack", () => {
  it("attack", () => {
    const bullets = [];

    const plane = setupPlane({}, bullets);
    plane.attack();

    expect(bullets.length).toBe(1);
  });
});

describe("run", () => {
  it("移動所有的子彈", () => {
    const bullet = new Bullet();
    bullet.y = 0;

    const plane = setupPlane({}, [bullet]);
    plane.run();
    // 一定不等於0,確保子彈是有在移動的
    expect(bullet.y).not.toBe(0);
  });

  it("子彈超過邊界後會被移除", () => {
    const bullets = [];
    const plane = setupPlane({}, bullets, { x: 0, y: 0 });
    plane.attack();
    plane.run();
    // 一定不等於0,確保子彈是有在移動的
    expect(bullets.length).toBe(0);
  });
});
