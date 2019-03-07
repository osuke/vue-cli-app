<template>
  <button
    class="button"
    @click="hoge"
  >{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private clickHandler!: () => void;
  @Prop() private text!: string;

  private hoge() {
    this.clickHandler();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  display: block;
  -webkit-appearance: none;
  border: none;
  width: 280px;
  height: 48px;
  border-radius: 24px;
  background: #5195e6;
  font-size: 1.6rem;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
}
</style>
