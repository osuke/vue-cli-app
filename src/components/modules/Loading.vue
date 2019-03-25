<template>
  <div class="loading"><div /><div /><div /><div /></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  display: block;
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.loading div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 4px;
  border: 3px solid #5195e6;
  border-radius: 50%;
  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #5195e6 transparent transparent transparent;
}
.loading div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>