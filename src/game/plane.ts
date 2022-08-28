import { Bullet } from "./bullet";
export interface Plane {
  x: number;
  y: number;
  speed: number;
  bullets: Bullet[];
  moveDown: () => void;
  moveUp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  attack: () => void;
  run: () => void;
}

const defaultOptions = { x: 0, y: 300, speed: 20 };

export function setupPlane(
  plane: any,
  bullets: Bullet[],
  options?: any
): Plane {
  Object.assign(plane, defaultOptions, options);
  plane.bullets = bullets;

  initMove(plane);
  initRun(plane, bullets);
  initAttack(plane, bullets);

  return plane;
}

function initMove(plane) {
  plane.moveDown = function () {
    plane.y += plane.speed;
  };

  plane.moveUp = function () {
    plane.y -= plane.speed;
  };

  plane.moveLeft = function () {
    plane.x -= plane.speed;
  };

  plane.moveRight = function () {
    plane.x += plane.speed;
  };
}
function initRun(plane, bullets) {
  plane.run = function () {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };
}
function initAttack(plane, bullets) {
  plane.attack = function () {
    //發射時應該要創建一個bullets
    const bullet = new Bullet();
    bullet.x = plane.x + 25;
    bullet.y = plane.y;
    bullet.border = 0;
    // 發射出去的同時註冊一個回調函式
    bullet.onDestroy = () => {
      const index = bullets.indexOf(bullet);
      bullets.splice(index, 1);
    };

    bullets.push(bullet);
  };
}
