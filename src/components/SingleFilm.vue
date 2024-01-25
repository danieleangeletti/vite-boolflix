<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  methods: {},
  props: {
    film: Object,
  },
};
</script>

<template>
  <div class="container">
    <div>
      <span>Il film è: {{ film.title }}. </span>
      <span>Il titolo del film originale è: {{ film.original_title }}. </span>
      <span
        >La lingua originale è: <span v-if="film.original_language == 'fr'">&#127467&#127479.</span>
      </span>
      <span>Il voto medio è: {{ film.vote_average }}.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
