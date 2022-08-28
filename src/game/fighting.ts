import { EnemyPlane } from "./EnemyPlane";
import { hitTestObject } from "./hitTestObject";
import { Plane } from "./plane";

export function fighting(plane: Plane, enemyPlanes: EnemyPlane[]) {
  plane.bullets.forEach((bullet, bIndex) => {
    enemyPlanes.forEach((enemy, eIndex) => {
      if (hitTestObject(bullet, enemy)) {
        plane.bullets.splice(bIndex, 1);
        enemyPlanes.splice(eIndex, 1);
      }
    });
  });
}
