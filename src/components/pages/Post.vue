<template>
  <Detail :content="content" />
</template>

<script lang="ts">
import axios from 'axios';
import Detail from '@/components/parts/Detail.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Detail,
  },
})
export default class Post extends Vue {
  private content: any = {};

  private created() {
    this.fetchData();
  }

  private fetchData() {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then((res: any) => {
        this.content = res.data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
