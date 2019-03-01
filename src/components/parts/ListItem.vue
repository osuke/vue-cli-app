<template>
  <article class="listItem">
    <a :href="entry.url" target="_blank">{{ entry.title }}</a>
    <span class="siteName">{{ entry.name }}</span>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface IEntry {
  created_at: string;
  date: string;
  description: string;
  id: number;
  name: string;
  title: string;
  updated_at: string;
  url: string;
}

@Component
export default class ListItem extends Vue {
  @Prop() private entry!: IEntry;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listItem {
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  font-size: 1.4rem;
  line-height: 1.5;
  background: #fff;
}
.listItem a {
  display: block;
}
.siteName {
  color: #5195e6;
  font-weight: bold;
  display: block;
  margin-top: 4px;
  font-size: 12px;
}
</style>
