<script>
import { store } from "../store.js";
import SingleFilm from "./SingleFilm.vue";

export default {
  data() {
    return { store };
  },
  components: { SingleFilm },
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <SingleFilm v-for="(elem, i) in store.films" :key="i" :film="elem" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
