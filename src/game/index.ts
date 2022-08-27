import { Application } from "pixi.js";

export * from "./plane";
export const game = new Application({
  //最終生成canvas
  width: 500,
  height: 500,
});
