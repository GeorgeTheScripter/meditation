<script setup lang="ts">
import Menu from '@/components/Menu.vue';
</script>

<template>
  <div>
    <Menu />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
