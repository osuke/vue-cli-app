<template>
  <header class="appHeader">
    <router-link :to="{ name: 'home'}">{{ appTitle }}</router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private appTitle = process.env.VUE_APP_TITLE;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appHeader {
  background: #fff;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
}
</style>
