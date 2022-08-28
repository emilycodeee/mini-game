<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import planeImg from "../assets/plane.png";
import { Plane } from "../game";

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

// 組建銷毀需移除

window.addEventListener("keydown", (e) => {
  // 額外寫是為了讓想發射就發射
  // 否則寫在switch內，則一次只能觸發一個

  if (e.code === "Space") {
    plane.attack();
  }

  switch (e.code) {
    case "ArrowDown":
      plane.moveDown();
      break;

    case "ArrowUp":
      plane.moveUp();
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
