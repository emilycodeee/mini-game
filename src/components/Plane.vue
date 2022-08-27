<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import planeImg from "../assets/plane.png";
import { reactive } from "vue";
import { setupPlane } from "../game";

const plane = setupPlane(reactive({}));

// 組建銷毀需移除

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      plane.moveDown();
      break;

    case "ArrowUp":
      plane.moveDown();
      break;

    case "ArrowLeft":
      plane.moveLeft();
      break;

    case "ArrowRight":
      plane.moveRight();
      break;

    default:
      break;
  }
});
</script>

<style scoped></style>
