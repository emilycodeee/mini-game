<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import enemyImg from "../assets/enemyPlane.png";
import { reactive, PropType } from "vue";
import { EnemyPlane } from "../game";

const { enemy } = defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});

enemy.width = 100;
enemy.height = 100;
</script>

<style scoped></style>
