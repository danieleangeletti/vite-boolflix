<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  computed: {
    get_image() {
      let final_link = "https://flagicons.lipis.dev/flags/4x3/";

      if (this.original_language == "en") {
        final_link += "gb";
      } else if (this.original_language == "ja") {
        final_link += "jp";
      } else if (this.original_language == "ko") {
        final_link += "kr";
      } else if (this.original_language == "zh") {
        final_link += "cn";
      } else {
        final_link += this.original_language;
      }
      final_link += ".svg";

      return final_link;
    },
  },
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
      <li>
        <div>Il titolo è: {{ title }}.</div>
        <div>Il titolo originale è: {{ original_title }}.</div>
        <div>La lingua originale è: {{ original_language }}.</div>
        <div>La bandiera è: <img :src="get_image" alt="" /></div>
        <div>Il voto medio è: {{ vote }}.</div>
      </li>
    </ul>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 24px;
}
</style>
