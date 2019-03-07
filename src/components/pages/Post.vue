<template>
  <div class="container">
    <section class="detail">
      <Article
        v-if="typeof entry.id !== 'undefined'"
        :entry="entry"
      />
    </section>
    <h2 class="head">最新記事</h2>
    <Articles />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/modules/Article.vue';
import Articles from '@/components/containers/Articles.vue';
import { API_BASE_URL } from '@/constants/config';

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
    axios.get(`${API_BASE_URL}/api/posts/${this.$route.params.id}`)
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
