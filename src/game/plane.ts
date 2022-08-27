export interface Plane {
  x: number;
  y: number;
  speed: number;
  moveDown: () => void;
  moveUp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
}

const defaultOptions = { x: 0, y: 0, speed: 5 };

export function setupPlane(plane: any, options: any): Plane {
  Object.assign(plane, defaultOptions, options);
  // init
  plane.x = 0;
  plane.y = 0;

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

  return plane;
}
