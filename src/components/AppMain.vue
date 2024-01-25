<script>
import { store } from "../store.js";
import SingleElement from "./SingleElement.vue";

export default {
  data() {
    return { store };
  },
  components: { SingleElement },
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <h1>FILMS</h1>
      <SingleElement
        v-for="(elem, i) in store.films"
        :key="i"
        :film_title="elem.title"
        :film_original_title="elem.original_title"
        :film_original_language="elem.original_language"
        :film_vote="elem.vote_average"
      />
      <h1>SERIES</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
