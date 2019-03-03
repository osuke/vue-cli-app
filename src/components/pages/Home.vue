<template>
  <Articles />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Articles from '@/components/parts/Articles.vue';

@Component({
  components: {
    Articles,
  },
})
export default class Home extends Vue {
}
</script>
