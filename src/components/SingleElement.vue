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
      } else if (this.original_language == "cs") {
        final_link += "cz";
      } else {
        final_link += this.original_language;
      }
      final_link += ".svg";

      return final_link;
    },
    get_poster() {
      let final_link = "https://image.tmdb.org/t/p/w185";
      final_link += this.poster_path;

      return final_link;
    },
  },
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    poster_path: String,
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
          La bandiera è: <img class="languages-logo" :src="get_image" alt="" />
        </div>
        <div>Il voto medio è: {{ vote }}.</div>
        <div v-if="poster_path != null">
          L'immagine di copertina è: <img :src="get_poster" alt="" />
        </div>
      </li>
    </ul>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.languages-logo {
  height: 24px;
}
</style>
