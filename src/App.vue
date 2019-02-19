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
#app {
  text-align: center;
}
</style>
