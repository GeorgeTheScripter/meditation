<script setup>
import ButtonMenu from './ButtonMenu.vue';

const links = [
  { id: 1, path: '/main', text: 'Медитация', icon: 'play' },
  { id: 2, path: '/stat', text: 'Статистика', icon: 'stat' },
  { id: 3, path: '/', text: 'Выход', icon: 'exit' },
];
</script>

<template>
  <header class="header">
    <div class="header__container">
      <logo-icon />
      <nav class="header__nav">
        <router-link v-for="link in links" :key="link.id" :to="link.path">
          <ButtonMenu class="header__btn">
            <component :is="`${link.icon}-icon`" name="icon" />
            <p>{{ link.text }}</p>
          </ButtonMenu>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding-top: 40px;
}

.header__container {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.header__nav {
  display: flex;
  align-items: baseline;
}
</style>
