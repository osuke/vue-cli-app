<template>
  <header class="appHeader">ヘッダー</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appHeader {
  text-align: center;
  height: 48px;
}
</style>
