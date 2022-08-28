import { Application } from "pixi.js";
import { Bullet } from "./bullet";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane";
import { fighting } from "./fighting";
import { Plane, setupPlane } from "./plane";

export * from "./plane";
export * from "./bullet";
export * from "./enemyPlane";
export const game = new Application({
  //最終生成canvas
  width: 500,
  height: 500,
});

// 真循環的業務邏輯與pixi是強相關的

export function initGame(_plane, bullets: Bullet[], enemyPlanes: EnemyPlane[]) {
  const plane = setupPlane(_plane, bullets);

  initEnemyPlanes(enemyPlanes);

  mainTicker(plane, enemyPlanes);
  return { plane, bullets, enemyPlanes };
}

// 讓子彈移動需要真循環，且因為跟pixi是強相關所以集成於此
function mainTicker(plane: Plane, enemyPlanes: EnemyPlane[]) {
  game.ticker.add(() => {
    plane.run();
    runEnemyPlanes(enemyPlanes);
    fighting(plane, enemyPlanes);
  });
}
