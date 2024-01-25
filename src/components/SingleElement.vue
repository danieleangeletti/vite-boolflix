<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      is_hovering: false,
    };
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
      let final_link = "https://image.tmdb.org/t/p/w342";
      final_link += this.poster_path;

      return final_link;
    },
    get_vote() {
      const film_or_serie_vote = Math.round(this.vote / 2);
      return film_or_serie_vote;
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
  <div class="col-3 col-margin total-box">
    <div class="poster-box h-100">
      <!-- <div>Il titolo è: {{ title }}.</div>
    <div>Il titolo originale è: {{ original_title }}.</div>
    <div>La lingua originale è: {{ original_language }}.</div>
    <div>
      La bandiera è: <img class="languages-logo" :src="get_image" alt="" />
    </div>
    <div>
      Il voto medio è:
      <i v-for="(elem, i) in get_vote" class="fa-solid fa-star"></i>
      <i v-for="(elem, i) in 5 - get_vote" class="fa-regular fa-star"></i>
    </div> -->
      <div v-if="poster_path != null">
        <img class="w-100" :src="get_poster" alt="" />
      </div>
      <div v-else class="w-100 h-100 bg-dark d-flex align-items-center">
        <h3 class="text-white text-center">SFONDO NON DISPONIBILE</h3>
      </div>
    </div>
    <div class="info-box">asd</div>
  </div>
</template>

<style lang="scss" scoped>
.languages-logo {
  height: 24px;
}
.col-margin {
  margin-bottom: calc((var(--bs-gutter-x) * 0.5) * 2);
}
.total-box .info-box {
  display: none;
}
.total-box:hover .info-box {
  display: block;
}
.total-box:hover .poster-box {
  display: none;
}

// STESSA COSA CON SCSS

// .total-box {
//   .info-box {
//     display: none;
//   }
//   &:hover .info-box {
//     display: block;
//   }
//   &:hover .poster-box {
//     display: none;
//   }
// }
</style>
