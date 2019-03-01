<template>
  <footer class="appFooter"></footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appFooter {
  text-align: center;
  height: 48px;
}
</style>
