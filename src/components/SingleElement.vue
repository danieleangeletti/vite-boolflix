<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  methods: {},
  props: {
    film_title: String,
    film_original_title: String,
    film_original_language: String,
    film_vote: Number,
  },
};
</script>

<template>
  <div class="container">
    <ul>
      <li>Il film è: {{ film_title }}.</li>
      <li>Il titolo del film originale è:{{ film_original_title }}.</li>
      <li>La lingua originale è: {{ film_original_language }}.</li>
      <li>Il voto medio è: {{ film_vote }}.</li>
    </ul>
    <hr />
  </div>
</template>

<style lang="scss" scoped></style>
