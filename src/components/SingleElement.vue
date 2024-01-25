<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  methods: {},
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
  },
};
</script>

<template>
  <div class="container">
    <ul>
      <li>Il titolo è: {{ title }}.</li>
      <li>Il titolo originale è:{{ original_title }}.</li>
      <li>La lingua originale è: {{ original_language }}.</li>
      <li>Il voto medio è: {{ vote }}.</li>
    </ul>
    <hr />
  </div>
</template>

<style lang="scss" scoped></style>
