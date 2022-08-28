<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import EnemyPlane from "./components/EnemyPlane.vue";
import { initGame } from "./game";
import { reactive } from "vue";

const { plane, bullets, enemyPlanes } = initGame(
  reactive({}),
  reactive([]),
  reactive([])
);

// const bullets
</script>

<template>
  <Container>
    <Plane :plane="plane" />
    <Bullet v-for="bullet in bullets" :bullet="bullet" />
    <EnemyPlane v-for="enemy in enemyPlanes" :enemy="enemy" />
  </Container>
</template>
