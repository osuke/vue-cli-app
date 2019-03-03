<template>
  <header class="header">
    <router-link :to="{ name: 'home'}">{{ appTitle }}</router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { APP_TITLE } from '@/constants/config';

@Component
export default class Header extends Vue {
  private appTitle = APP_TITLE;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #fff;
  text-align: center;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  font-weight: bold;
}
</style>
