<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  methods: {
    get_image(lang) {
      let final_link = "https://flagicons.lipis.dev/flags/4x3/";

      if (lang == "en") {
        final_link += "gb";
      } else if (lang == "ja") {
        final_link += "jp";
      } else {
        final_link += lang;
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
        <div>
          La bandiera è: <img :src="get_image(original_language)" alt="" />
        </div>
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
