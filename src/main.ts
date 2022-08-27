// import { createApp } from 'vue'
// import './style.css'
import App from "./App.vue";
import { game } from "./game";
import { createApp } from "./runtime-canvas";
// createApp(App).mount('#app')
// import * as PIXI from "pixi.js"; []
// console.log(PIXI); 印出來都是大寫 表示都是class

// 生成後 放上文件展示出來
document.body.append(game.view);
// renderer.createApp(App).mount(game.stage);
// 將renderer 導出的寫法
createApp(App).mount(game.stage);
