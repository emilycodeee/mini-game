import { describe, it, expect, vi } from "vitest";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane";

describe("EnemyPlane", () => {
  it("move", () => {
    const enemy = new EnemyPlane();
    enemy.y = 0;
    enemy.speed = 1;
    enemy.move();
    expect(enemy.y).toBe(1);
  });

  it("1.5秒自動生成一架敵軍-initEnemyPlanes", () => {
    vi.useFakeTimers();
    const enemyPlanes = [];
    initEnemyPlanes(enemyPlanes);

    // 2000 兩秒產生一架
    vi.advanceTimersByTime(4000);
    expect(enemyPlanes.length).toBe(2);
    vi.restoreAllMocks();
  });

  it("讓所有的敵軍移動-runEnemyPlanes", () => {
    const enemy = new EnemyPlane();
    enemy.x = 0;
    enemy.y = 1;
    const enemyPlanes: EnemyPlane[] = [enemy];
    runEnemyPlanes(enemyPlanes);
    expect(enemy.y).toBe(2);
  });
});
