<template>
  <article class="article">
    <h2>{{ content.title }}</h2>
    <div>{{ content.description }}</div>
    <a :href="content.url" target="_blank">続きを読む</a>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {
  @Prop() private content!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
</style>
