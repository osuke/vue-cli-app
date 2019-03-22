<template>
  <section class="container">
    <div class="list">
      <Article v-for="entry in entries" :key="entry.id" :entry="entry" />
    </div>
    <Button
      v-if="isAvailable"
      text="次の記事を読み込む"
      :clickHandler="fetchData"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Article from '@/components/modules/Article.vue';
import Button from '@/components/modules/Button.vue';
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
    Button,
  },
})
export default class Home extends Vue {
  private entries: IEntry[] = [];
  private offset = 0;
  private isAvailable = true;

  private created() {
    this.fetchData();
  }

  private fetchData() {
    axios.get(`${API_BASE_URL}/api/posts/?offset=${this.offset}`)
      .then((res) => {
        this.entries.push(...res.data.items);
        if (parseInt(res.data.offset, 10) + res.data.items.length >= res.data.total) {
          this.isAvailable = false;
        }
        this.offset += 10;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 12px;
}
.list {
  margin-bottom: 24px;
}
</style>