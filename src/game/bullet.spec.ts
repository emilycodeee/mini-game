import { describe, it, expect, vi } from "vitest";
import { Bullet } from "./bullet";

describe("Bullet", () => {
  it("move", () => {
    const bullet = new Bullet();
    bullet.y = 1;
    bullet.speed = 1;
    bullet.move();
    expect(bullet.y).toBe(0);
  });

  it("超過邊界的時候應該要回調一個onDestroy", () => {
    const bullet = new Bullet();
    bullet.x = 1;
    bullet.y = 1;
    bullet.speed = 1;
    bullet.border = 0;
    bullet.onDestroy = vi.fn();
    bullet.move();
    expect(bullet.y).toBe(0);
  });
});
