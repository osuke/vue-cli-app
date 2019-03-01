<template>
  <div>
    <Header />
    <div id="app">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/globals/Header.vue';
import Footer from '@/components/globals/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
}
</script>

<style>
html {
  font-size: 10px;
}
body {
  font-family: ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Helvetica, sans-serif;
  color: #3b3b3b;
  background: #f0f0f0;
}
a {
  text-decoration: none;
  color: #3b3b3b;
}
</style>
