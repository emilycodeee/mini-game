// 創建渲染器的接口
import { createRenderer } from "vue";
import { Sprite, Container, Text, Texture } from "pixi.js";
// 初始化

// 創建 實現渲染器接口
/*
當我們實際調用渲染器時，就會走以下邏輯
**/

const renderer = createRenderer<Container, Container>({
  //傳入一個obj-options 此為實際的渲染接口
  // 在vue 3 運行時 進行調用
  createElement(type) {
    // 傳入虛擬節點的類型 type
    // 而在vue3元碼默認runtime是dom 但我們需要他返回pixi對象

    //Container 判斷當前是不是c 是的話 我們就創建
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;

      case "Sprite":
        element = new Sprite();
        break;

      default:
        throw Error(`this type is not excess ${type}`);
        break;
    }
    return element;
  },
  // 型別安全考量
  patchProp(el, key, prevValue, nextValue) {
    console.log(key);
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;

      default:
        el[key] = nextValue;
        // el.x = nextValue
        // el.y = newtValue
        break;
    }
  },
  insert(el, parent) {
    // 元素要插入時調用
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    // 元素要刪除時調用

    if (el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});

// 可以把renderer導出 或是 封裝createApp後直接導出調用

export function createApp(rootComponent: any) {
  return renderer.createApp(rootComponent);
}
