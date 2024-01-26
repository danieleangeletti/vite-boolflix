<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
      film_cast: [],
      serie_cast: [],
      film_genres: [],
      serie_genres: [],
      flag: 0,
    };
  },
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    poster_path: String,
    overview: String,
    id: Number,
    type: String,
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
  methods: {
    get_cast_and_details() {
      if (this.flag == 0) {
        if (this.type == "film") {
          axios
            .get("https://api.themoviedb.org/3/movie/" + this.id + "/credits", {
              params: {
                api_key: this.store.api_key,
              },
            })
            .then((response) => {
              this.film_cast = response.data.cast;
              if (this.film_cast.length <= 5) {
                for (let i = 0; i < this.film_cast.length; i++) {
                  console.log(this.film_cast[i].name);
                }
              } else {
                for (let i = 0; i < 5; i++) {
                  console.log(this.film_cast[i].name);
                }
              }
            });
          axios
            .get("https://api.themoviedb.org/3/movie/" + this.id, {
              params: {
                api_key: this.store.api_key,
              },
            })
            .then((response) => {
              this.film_genres = response.data.genres;
              for (let i = 0; i < this.film_genres.length; i++) {
                console.log(this.film_genres[i].name);
              }
            });
        } else {
          axios
            .get("https://api.themoviedb.org/3/tv/" + this.id + "/credits", {
              params: {
                api_key: this.store.api_key,
              },
            })
            .then((response) => {
              this.serie_cast = response.data.cast;
              if (this.serie_cast.length <= 5) {
                for (let i = 0; i < this.serie_cast.length; i++) {
                  console.log(this.serie_cast[i].name);
                }
              } else {
                for (let i = 0; i < 5; i++) {
                  console.log(this.serie_cast[i].name);
                }
              }
            });
          axios
            .get("https://api.themoviedb.org/3/tv/" + this.id, {
              params: {
                api_key: this.store.api_key,
              },
            })
            .then((response) => {
              this.serie_genres = response.data.genres;
              for (let i = 0; i < this.serie_genres.length; i++) {
                console.log(this.serie_genres[i].name);
              }
            });
        }
        this.flag = 1;
      } else {
        this.film_cast = [];
        this.serie_cast = [];
        this.film_genres = [];
        this.serie_genres = [];
        this.flag = 0;
      }
    },
  },
};
</script>

<template>
  <div
    class="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-margin total-box smaller"
  >
    <div class="poster-box border-white h-100">
      <div class="h-100" v-if="poster_path != null">
        <img class="w-100 h-100" :src="get_poster" alt="" />
      </div>
      <div v-else class="w-100 h-100 bg-dark d-flex align-items-center">
        <h3 class="text-white text-center">POSTER NOT AVAILABLE</h3>
      </div>
    </div>
    <div class="info-box border-white p-3 h-100 text-white bg-dark">
      <div><b>Title</b>: {{ title }}</div>
      <div><b>Original title</b>: {{ original_title }}</div>
      <div><b>Original language</b>: {{ original_language }}</div>
      <div>
        <b>Flag</b>: <img class="languages-logo" :src="get_image" alt="" />
      </div>
      <div>
        <b>Average vote</b>:
        <i v-for="(elem, i) in get_vote" class="fa-solid fa-star"></i>
        <i v-for="(elem, i) in 5 - get_vote" class="fa-regular fa-star"></i>
      </div>
      <div v-if="overview.length > 0" class="h-100p overflow-auto">
        <b>Overview</b>: <span>{{ overview }}</span>
      </div>
      <div class="d-flex justify-content-center mt-3 mb-3">
        <button
          @click="get_cast_and_details"
          type="button"
          class="btn btn-info"
        >
          GET CAST AND GENRES
        </button>
      </div>
      <div v-if="film_cast.length > 0" class="h-60p overflow-auto mb-1">
        <h6>CAST:</h6>
        <ul>
          <li v-for="(elem, i) in film_cast">
            {{ elem.name }}
          </li>
        </ul>
      </div>
      <div v-if="film_genres.length > 0" class="h-60p overflow-auto">
        <h6>GENRES:</h6>
        <ul>
          <li v-for="(elem, i) in film_genres">
            {{ elem.name }}
          </li>
        </ul>
      </div>
      <div v-if="serie_cast.length > 0" class="h-60p overflow-auto mb-1">
        <h6>CAST:</h6>
        <ul>
          <li v-for="(elem, i) in serie_cast">
            {{ elem.name }}
          </li>
        </ul>
      </div>
      <div v-if="serie_genres.length > 0" class="h-60p overflow-auto">
        <h6>GENRES:</h6>
        <ul>
          <li v-for="(elem, i) in serie_genres">
            {{ elem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages-logo {
  height: 24px;
}
.col-margin {
  margin-bottom: calc((var(--bs-gutter-x) * 0.5) * 2);
}
.border-white {
  border: 1px solid white;
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
.smaller {
  font-size: 0.9em;
}
.h-60p {
  height: 60px;
}
.h-100p {
  height: 100px;
}
.total-box {
  height: 65vh;
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
