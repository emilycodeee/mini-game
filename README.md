## UI 與邏輯層分離的 TDD 測試先行練習

- vue3、Vitest
- typescript
- custom renderer
- pixi.js

### 執行

```
安裝 pnpm i
執行遊戲 pnpm dev
執行測試 pnpm test
```

### task

1. 基於 custom renderer api 實現把視圖渲染到 canvas 上
   （原本是預設渲染在 dom 上）

   1. init pixijs (初始化 pixijs)
   2. renderer({}) 實現渲染接口

2. 核心遊戲邏輯

- 我方飛機
- 發射子彈
- 敵軍
- 碰撞（子彈和敵軍）

0829 wip 待實現

- 鍵盤事件掛載與移除優化
- 敵軍飛機左右橫跑隨機降落實現優化

### 特別感謝阿崔 cxr 的演示
