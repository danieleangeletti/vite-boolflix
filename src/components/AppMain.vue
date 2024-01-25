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
        :title="elem.title"
        :original_title="elem.original_title"
        :original_language="elem.original_language"
        :vote="elem.vote_average"
        :poster_path="elem.poster_path"
      />
      <h1>SERIES</h1>
      <SingleElement
        v-for="(elem, i) in store.series"
        :key="i"
        :title="elem.name"
        :original_title="elem.original_name"
        :original_language="elem.original_language"
        :vote="elem.vote_average"
        :poster_path="elem.poster_path"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
