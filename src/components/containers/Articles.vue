<template>
  <section class="container">
    <div class="list">
      <Article v-for="entry in entries" :key="entry.id" :entry="entry" />
    </div>
    <Button
      v-if="isAvailable && !isFetching"
      text="次の記事を読み込む"
      :clickHandler="fetchData"
    />
    <div v-if="isFetching" class="ldsRing"><div /><div /><div /><div /></div>
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
  private isAvailable = false;
  private isFetching = false;

  private created() {
    this.fetchData();
  }

  private fetchData() {
    this.isFetching = true;

    axios.get(`${API_BASE_URL}/api/posts/?offset=${this.offset}`)
      .then((res) => {
        this.entries.push(...res.data.items);
        if (parseInt(res.data.offset, 10) + res.data.items.length >= res.data.total) {
          this.isAvailable = false;
        } else {
          this.isAvailable = true;
        }

        setTimeout(() => {
          this.isFetching = false;
        }, 1000);
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
.ldsRing {
  display: block;
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.ldsRing div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 4px;
  border: 3px solid #3b3b3b;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #3b3b3b transparent transparent transparent;
}
.ldsRing div:nth-child(1) {
  animation-delay: -0.45s;
}
.ldsRing div:nth-child(2) {
  animation-delay: -0.3s;
}
.ldsRing div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>