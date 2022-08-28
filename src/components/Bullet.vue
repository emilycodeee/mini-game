<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import bulletImg from "../assets/bullet.png";
import { reactive, PropType } from "vue";
import { Bullet } from "../game";

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});
bullet.width = 100;
bullet.height = 100;
</script>

<style scoped></style>
