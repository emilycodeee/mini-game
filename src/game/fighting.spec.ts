import { describe, it, expect, vi } from "vitest";
import { Bullet } from "./bullet";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane";
import { fighting } from "./fighting";
import { setupPlane } from "./plane";

describe("fighting", () => {
  it("當敵軍與我方子彈碰撞時，兩物件都會被銷毀", () => {
    const bullet = new Bullet();
    bullet.x = 0;
    bullet.y = 0;
    bullet.width = 100;
    bullet.height = 100;

    const enemy = new EnemyPlane();
    enemy.x = 50;
    enemy.y = 50;
    enemy.width = 100;
    enemy.height = 100;

    const bullets = [bullet];
    const plane = setupPlane({}, bullets);
    const enemyPlanes = [enemy];
    fighting(plane, enemyPlanes);

    expect(bullets.length).toBe(0);
    expect(enemyPlanes.length).toBe(0);
  });
});
