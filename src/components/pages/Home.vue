<template>
  <div class="home">
    <section class="listItems">
      <ListItem v-for="entry in entries" :key="entry.id" :entry="entry" />
    </section>
    <Button
      v-if="isAvailable"
      text="次の記事を読み込む"
      :clickHandler="fetchData"
    />
  </div>
</template>

<script lang="ts">
// Buttonの中からfetchData呼ぶようにする
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ListItem from '@/components/parts/ListItem.vue';
import Button from '@/components/parts/Button.vue';

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
    ListItem,
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
    axios.get(`http://localhost:3000/posts/?offset=${this.offset}`)
      .then((res) => {
        this.entries.push(...res.data.items);
        if (parseInt(res.data.offset, 10) + res.data.items.length === res.data.total) {
          this.isAvailable = false;
        }
        this.offset += 10;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 12px;
}
.listItems {
  margin-bottom: 24px;
}
</style>