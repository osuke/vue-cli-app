<template>
  <div class="container">
    <section class="detail">
      <ListItem :entry="entry" />
    </section>
    <h2 class="head">最新記事</h2>
    <Articles />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Article from '@/components/parts/Article.vue';
import Articles from '@/components/parts/Articles.vue';
import { Component, Vue } from 'vue-property-decorator';

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

@Component({
  components: {
    Article,
    Articles,
  },
})
export default class Post extends Vue {
  private entry: any = {};

  private created() {
    this.fetchData();
  }

  private fetchData() {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then((res) => {
        this.entry = res.data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  padding: 12px;
}
.head {
  padding: 8px 12px 4px;
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
